"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";
import { HiMiniLanguage } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Header component responsible for rendering the top navigation bar.
 * In addition to the existing profile info and theme/language toggles,
 * a dedicated link to the projects page has been added.
 * The projects link navigates to `/projects` and uses the existing
 * translation keys (projects_title) for its label. If the translation
 * key isn't found, it falls back to "Projects".
 */
export default function HeaderPage() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const { locale, toggleLanguage } = useLanguage();
  const { t } = useTranslation(locale.toLowerCase());

  return (
    <div>
      <nav className="flex justify-between items-center w-full px-4 pt-10 max-w-6xl mx-auto">
        {/* Profile Info */}
        <Link href="/" className="flex gap-x-3 items-center cursor-pointer">
  <Image
    width={40}
    height={40}
    className="w-10 h-10 rounded-100 object-cover"
    src="/KM.png"
    alt="Profilbild"
  />
  {/* Hide this on small screens */}
  <div className="hidden sm:block">
    <AnimatePresence mode="wait">
      <motion.h4
        key={`name_${locale}`}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className="text-xs"
      >
        {t("name")}
      </motion.h4>
    </AnimatePresence>
    <AnimatePresence mode="wait">
      <motion.p
        key={`job_${locale}`}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className="text-[#828282] text-xs"
      >
        {t("job")}
      </motion.p>
    </AnimatePresence>
  </div>
</Link>

        {/* Navigation links */}
        <div className="flex items-center gap-x-3">
          <Link
            href="/projects"
            className="text-xs px-3 py-2 rounded-full border border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            {t("projects_title") || "Projects"}
          </Link>
          <Link
            href="/certifications"
            className="text-xs px-3 py-2 rounded-full border border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            {t("certifications_title") || "Certifications"}
          </Link>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-x-3 items-center">
          {/* Theme Button */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
            }}
            className="p-2 rounded-full border border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            style={{ lineHeight: 0 }}
          >
            <motion.div
              key={theme}
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: 360, scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <CgDarkMode
                className="text-xl"
                style={{ color: currentTheme === "dark" ? "#ffffff" : "#000000" }}
              />
            </motion.div>
          </motion.button>

          {/* Animated Language Button */}
          <motion.button
            onClick={toggleLanguage}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors overflow-hidden relative"
          >
            <HiMiniLanguage className="text-base" />
            <motion.span
              key={locale}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
            >
              {locale.toUpperCase()}
            </motion.span>
          </motion.button>
        </div>
      </nav>

      {/* Divider */}
      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60" />
      </div>
    </div>
  );
}