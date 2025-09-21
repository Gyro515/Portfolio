import './globals.css';
import { Analytics } from '@vercel/analytics/react'; // Vercel Analytics
import Header from './layout/header';
import Footer from './layout/footer';
import TopLoader from 'nextjs-toploader';

/**
 * Metadata for search engine optimization.
 */
export const metadata = {
  title: {
    default: 'Justin Sage Briones | JSB Personal',
    template: '%s | Justin Sage Briones',
  },
  description:
    'Portfolio of Justin Sage Briones — recent Computer Science graduate focused on building impactful solutions and turning complex challenges into meaningful and actionable insights.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

/**
 * Root layout.
 *
 * @param props.children Page content to render.
 * @returns HTML document wrapper used by Next.js.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <TopLoader color="#3b82f6" height={3} showSpinner={false} crawlSpeed={200} />
        {/* HEADER */}
        <Header />
        {children}

        {/* FOOTER */}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
