import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import favicon from "../public/img/favicon-32x32.png"

const archivo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "%s | 31daylee",
  icons: {
    icon: favicon.src,
  },
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
