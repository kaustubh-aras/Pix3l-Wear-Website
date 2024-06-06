import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pix3l Wear",
  description: "Pix3l Wear Clothing",
};

const myFont = localFont({
  src: "../../public/fonts/Klapt/Klapt-Bold.ttf",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
