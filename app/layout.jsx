import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Open Decor AI",
  description: "Display your AI creations in your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <div id="page">
          <Navbar />
          <div id="main" className="flex">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
