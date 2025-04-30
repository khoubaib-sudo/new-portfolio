"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

export default function LatestWorkCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[100px] col-span-2 row-span-3 md:row-span-2">
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
  );
}
