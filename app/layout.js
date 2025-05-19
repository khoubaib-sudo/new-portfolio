import "./globals.css";
import Theming from "@/components/providers/Theme";
import HeaderPage from "./(Header)/Header/Page";
import Footer from "./components/Footer";
import { Major_Mono_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Loader from "@/components/Loader";

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Khoubaieb Maamouri | Junior Frontend Entwickler in Darmstadt</title>
        <meta
          name="description"
          content="Entdecken Sie das Portfolio von Khoubaieb Maamouri, einem Junior Frontend Entwickler in Darmstadt, spezialisiert auf Next.js, React und modernste Webtechnologien."
        />
        <meta
          name="keywords"
          content="Frontend Entwickler Darmstadt, Junior Developer Hessen"
        />
        <link rel="canonical" href="https://www.khoubaiebmaamouri.website" />
        <meta property="og:title" content="Khoubaieb Maamouri | Junior Frontend Entwickler in Darmstadt" />
        <meta property="og:description" content="Portfolio eines Junior Frontend Entwicklers aus Hessen, spezialisiert auf React und Next.js." />
        <meta property="og:url" content="https://www.khoubaiebmaamouri.website" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Khoubaieb Maamouri Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khoubaieb Maamouri | Junior Frontend Entwickler in Darmstadt" />
        <meta name="twitter:description" content="Portfolio für React, JavaScript und TypeScript Projekte in Deutschland" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Khoubaieb Maamouri",
              "jobTitle": "Junior Frontend Entwickler",
              "url": "https://www.khoubaiebmaamouri.website",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Darmstadt",
                "addressRegion": "Hessen",
                "addressCountry": "DE",
              },
              "sameAs": [
                "https://github.com/khoubaib-sudo",
                "https://www.linkedin.com/in/khoubaib-maamouri/",
              ],
              "knowsAbout": [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn ui",
                "Zustand",
                "Prisma",
                "Supabase",
                "Three.js",
                "WebGL",
              ],
            }),
          }}
        />
      </head>
      <body className={majorMono.className}>
        <Loader />
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