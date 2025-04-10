import { Metadata, Viewport } from "next";
import "../css/globals.css";
import { Geist } from "next/font/google";
import Header from "@/src/components/Header";

const geist = Geist({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Learn Next.js",
  description: "Let is Learn Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={geist.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
