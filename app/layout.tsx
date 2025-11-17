
import { Rethink_Sans } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${rethinkSans.className} antialiased`}
      >
        <NextTopLoader color="#02B49A" height={3.5} />
        {children}
      </body>
    </html>
  );
}
