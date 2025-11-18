
import { Rethink_Sans } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";

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
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
