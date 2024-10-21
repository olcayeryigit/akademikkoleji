import Header from "@/components/common/header/Header";
import "@/styles/index.scss";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "Eğitim Sayfası",
  description: "Eğitimle ilgili bilgiler.",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  weights: [400, 600, 700], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}