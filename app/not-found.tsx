import Link from 'next/link';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import RvLogo from '@/components/RvLogo';
import { BUSINESS_INFO } from '@/lib/data';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#0e0e0e] border border-[#D4AF37]/40 shadow-2xl">
        <div className="flex justify-center">
          <RvLogo variant="full" size={100} />
        </div>

        <div className="space-y-2">
          <p className="text-4xl font-serif font-bold text-[#F5D889] tabular-nums">404</p>
          <h1 className="text-2xl font-serif font-bold text-white">
            Page Not Found
          </h1>
          <p className="text-xs text-zinc-400">
            The page you are looking for does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3 rounded text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D889] to-[#D4AF37] hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to RV Events Home</span>
          </Link>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full py-2.5 rounded text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Call Vishal (8090123175)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
