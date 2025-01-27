import "../globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
