import './globals.css';
import { Analytics } from '@vercel/analytics/react'; // Vercel Analytics
import Header from './layout/header';
import Footer from './layout/footer';

export const metadata = {
  title: {
    default: 'JSB - Justin Sage Briones',
    template: '%s | JSB',
  },
  description: 'Portfolio of Justin Sage Briones',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" className="brightness-50" />
      </head>
      <body>
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
