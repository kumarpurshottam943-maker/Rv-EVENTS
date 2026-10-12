import { NextRequest, NextResponse } from 'next/server';
import { getStoredInquiries, saveInquiry, updateInquiryStatus, deleteInquiry } from '@/lib/storage';

export async function GET() {
  const inquiries = getStoredInquiries();
  return NextResponse.json({ success: true, inquiries });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.customerName || !body.phone || !body.eventType || !body.eventDate) {
      return NextResponse.json(
        { success: false, error: 'Customer name, phone number, event type, and date are required.' },
        { status: 400 }
      );
    }

    const saved = saveInquiry({
      customerName: body.customerName.trim(),
      phone: body.phone.trim(),
      email: body.email ? body.email.trim() : '',
      eventType: body.eventType,
      eventDate: body.eventDate,
      eventLocation: body.eventLocation ? body.eventLocation.trim() : 'Farrukhabad',
      estimatedBudget: body.estimatedBudget || '',
      guestCount: body.guestCount || '',
      message: body.message ? body.message.trim() : '',
      consent: Boolean(body.consent),
    });

    return NextResponse.json({ success: true, inquiry: saved });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || 'Internal error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and status required' }, { status: 400 });
    }
    const updated = updateInquiryStatus(id, status);
    return NextResponse.json({ success: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });
    }
    const deleted = deleteInquiry(id);
    return NextResponse.json({ success: deleted });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
