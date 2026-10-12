import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin'],
    },
    sitemap: 'https://ais-dev-rxdupvopvers6xushwlywu-305542938882.asia-southeast1.run.app/sitemap.xml',
  };
}
