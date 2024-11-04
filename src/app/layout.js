import Footer from "@/components/root-layout/footer/Footer";
import Header from "@/components/root-layout/header/Header";
import "@/styles/index.scss";
import { Open_Sans } from "next/font/google";  // Open Sans yazı tipini içe aktarıyoruz

export const metadata = {
  title: "Eğitim Sayfası",
  description: "Eğitimle ilgili bilgiler.",
};

// Open Sans yazı tipini tanımlıyoruz
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Ağırlıkları belirliyoruz
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={openSans.className}> 
        <div className="">
          <Header />
        </div>
        {children}


     
  <Footer/>    
 
         
      </body>  

    </html>
  );
}
