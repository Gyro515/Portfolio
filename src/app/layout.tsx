import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // Vercel Analytics
import Header from "./section/Header"
import Footer from "./section/Footer"


export const metadata = {
  title: "Justin Sage Portfolio",
  description: "Personal developer website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"/>
        <link rel="icon" href="/favicon.ico" sizes="any" className="brightness-50"/>
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
