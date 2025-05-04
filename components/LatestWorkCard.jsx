"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";
import { FaLanguage } from "react-icons/fa";
export default function WorkAndLanguages() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const languages = [
    {
      nameKey: "language_english_name",
      levelKey: "language_english_level",
      extraKey: "language_english_extra",
    },
    {
      nameKey: "language_french_name",
      levelKey: "language_french_level",
      extraKey: "language_french_extra",
    },
    {
      nameKey: "language_german_name",
      levelKey: "language_german_level",
      extraKey: "language_german_extra",
    },
  ];
  

  return (
    <div className="col-span-2 row-span-2 md:row-span-2 grid grid-rows-1 gap-4">
      {/* Latest Work Card */}
      <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg">
        <div className="absolute w-full p-2 z-10">
          <div className="flex justify-between items-center">
            <p className="text-xs">{t("latest_work_title")}</p>
            <Link
              href="https://ristorante-pizzeria-sch-tzenhof.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 text-xs hover:underline"
            >
              Ristorante Pizzeria Schützenhof
            </Link>
          </div>
          <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
        </div>

        <Link
          href="https://ristorante-pizzeria-sch-tzenhof.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={900}
            height={300}
            className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
            src={"/restowebsite.png"}
            alt="Ristorante Pizzeria Schützenhof Website"
          />
        </Link>
      </div>

      <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 rounded-xl shadow-lg p-2 text-sm">
  {/* Title */}
  <div className="mb-2 ">
  <p className="text-xs">{t("languages_title")}</p>
  </div>

  {/* Language List */}
  <ul className="space-y-3">
  {languages.map(({ nameKey, levelKey, extraKey }) => (
    <li
      key={nameKey}
      className="text-xs bg-neutral-100 dark:bg-[#2A2A2A] px-3 py-1.5 rounded-md shadow-sm w-fit"
    >
      {t(nameKey)} — {t(levelKey)}{t(extraKey) && `, ${t(extraKey)}`}
    </li>
  ))}
</ul>

</div>

    </div>
  );
}
