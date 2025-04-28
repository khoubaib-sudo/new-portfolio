"use client";

import { createContext, useContext, useState } from "react";

// 1. Create the Context
const LanguageContext = createContext();

// 2. Create the Provider
export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en"); // Default English

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "de" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Custom Hook to use it easily
export function useLanguage() {
  return useContext(LanguageContext);
}
