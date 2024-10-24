import ActionBar from "@/components/common/header/ActionBar";
import Header from "@/components/common/header/Header";
import "@/styles/index.scss";
import { Roboto } from "next/font/google";  // Roboto yazı tipini içe aktarıyoruz

export const metadata = {
  title: "Eğitim Sayfası",
  description: "Eğitimle ilgili bilgiler.",
};

// Roboto yazı tipini tanımlıyoruz
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Ağırlıkları belirliyoruz
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={roboto.className}> 
        <Header />
        {children}
      </body>
    </html>
  );
}