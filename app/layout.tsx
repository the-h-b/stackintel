import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stack Intel",
  description:
    "Transform your payment process with simplicity and security, enabling your business to thrive and succeed in a competitive market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#EFF1F5]`}>
        <Navbar />
        <div className="">{children}</div>
        <div id="footer-section">
          <Footer />
        </div>
      </body>
    </html>
  );
}
