import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
