import "./globals.css";
import Theming from "@/components/providers/Theme";
import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";
import Head from "next/head";
import { Major_Mono_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400", // Only one weight available
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
        <LanguageProvider>
          <HeaderPage />
          {children}
          <Footer />
          </LanguageProvider>
        </Theming>
      </body>
    </html>
  );
}
