import './globals.css';
import { Analytics } from '@vercel/analytics/react'; // Vercel Analytics
import Header from './section/Header'
import { Github, Linkedin, Mail } from 'lucide-react';

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

        {/* HEADER */}
        <Header />
        {children}
        
        {/* FOOTER */}
        <footer></footer>

        <Analytics />
      </body>
    </html>
  );
}
