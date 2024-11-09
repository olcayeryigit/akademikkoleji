"use client";
import Footer from "@/components/root-layout/footer/Footer";
import Header from "@/components/root-layout/header/Header";
import "@/styles/index.scss";
import { useState, useEffect } from "react";
import { Open_Sans } from "next/font/google"; 
import LoadingSpinner from "@/components/common/LoadingSpinner";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="tr">
      <body className={openSans.className}>
        {loading ? (
          <div className="h-screen w-full flex items-center justify-center">
         <LoadingSpinner/>
          </div>
        ) : (
          <div className="others">
            
            <Header />
            {children}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
