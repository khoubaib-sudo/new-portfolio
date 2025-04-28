"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation"; // Import your hook
import { useState } from "react"; // You might need this depending on your structure
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <motion.div
      className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
    >
      <div className="absolute w-full p-2 z-10">
        <div className="flex justify-between items-center">
          <p className="text-xs">{t("about_title")}</p>
          <p className="text-neutral-500 text-xs">{t("about_name")}</p>
        </div>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-10 px-3 pb-3">
        <p className="text-xs font-semibold leading-5">
          {t("about_description")}
        </p>
      </div>
    </motion.div>
  );
}
