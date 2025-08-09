import "./globals.css";
import Theming from "@/components/providers/Theme";
import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Loader from "@/components/Loader";

// Global metadata for the entire application.  This configuration will be
// automatically injected into the <head> of every page by Next.js.  It
// describes who you are and what your site is about.  Update the URL to
// reflect your actual deployment domain.
export const metadata = {
  title: "Khoubaieb Maamouri – Junior Frontend Entwickler in Darmstadt",
  description:
    "Portfolio of Khoubaieb Maamouri, a junior frontend developer based in Darmstadt. Explore projects built with React, Next.js, Tailwind CSS and more.",
  keywords:
    "Frontend Entwickler Darmstadt, React Developer Germany, Next.js Portfolio, Webentwickler, Tailwind CSS, JavaScript",
  authors: { name: "Khoubaieb Maamouri" },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.khoubaiebmaamouri.website/",
  },
  openGraph: {
    title: "Khoubaieb Maamouri – Junior Frontend Entwickler",
    description:
      "Portfolio eines Junior Frontend‑Entwicklers in Darmstadt (React, Next.js, Tailwind CSS).",
    url: "https://www.khoubaiebmaamouri.website/",
    siteName: "Khoubaieb Maamouri Portfolio",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://www.khoubaiebmaamouri.website/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Portrait of Khoubaieb Maamouri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khoubaieb Maamouri – Junior Frontend Entwickler",
    description:
      "Portfolio eines Junior Frontend‑Entwicklers in Darmstadt (React, Next.js, Tailwind CSS).",
    images: ["https://www.khoubaiebmaamouri.website/social-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Basic meta tags for character encoding and responsive design */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="cursor-none">
        {/* Loader displayed while the rest of the application is loading */}
        <Loader />
        <Theming>
          <LanguageProvider>
            {/* Site header */}
            <HeaderPage />
            {/* Main page content */}
            {children}
            {/* Footer */}
            <Footer />
          </LanguageProvider>
        </Theming>
      </body>
    </html>
  );
}