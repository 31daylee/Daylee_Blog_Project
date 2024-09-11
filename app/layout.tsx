import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const archivo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "%s | 31daylee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
