import { Inter, Epilogue, Mohave, Momo_Signature } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/Whatsapp";
import "./globals.css";

const inter = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-primary",
  subsets: ["latin"],
});

const mohave = Mohave({
  variable: "--font-tertiary",
  subsets: ["latin"],
});

const momo = Momo_Signature({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    default: "Skytech Piping Solutions",
    template: "%s | Skytech",
  },
  description:
    "Skytech specializes in industrial piping solutions including FRP, thermoplastic, carbon steel, and stainless steel systems across the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${epilogue.variable} ${mohave.variable} ${momo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          <WhatsAppButton
            phoneNumber="+971 56 464 6739"
            message="Hello! I'd like to request a quote."
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
