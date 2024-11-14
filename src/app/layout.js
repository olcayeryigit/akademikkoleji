"use client";
import Footer from "@/components/root-layout/footer/Footer";
import Header from "@/components/root-layout/header/Header";
import "@/styles/index.scss";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={figtree.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
