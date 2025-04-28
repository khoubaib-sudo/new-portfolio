import { useState, useEffect } from "react";

export function useTranslation(locale) {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        const res = await import(`@/locales/${locale}/common.json`);
        setTranslations(res);
      } catch (error) {
        console.error("Error loading translation file:", error);
      }
    }

    loadTranslations();
  }, [locale]);

  function t(key) {
    return translations[key] || key;
  }

  return { t };
}
