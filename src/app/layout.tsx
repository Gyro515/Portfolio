import './globals.css';
import { Analytics } from '@vercel/analytics/react'; // <-- Add this

export const metadata = {
  title: 'Justin Sage Portfolio',
  description: 'Personal developer website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics /> {/* <-- Add this inside <body> */}
      </body>
    </html>
  );
}
