"use client";

import { useRef, useEffect, useState } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function ExperienceCard() {
  const scrollRef = useRef(null);
  const [atBottom, setAtBottom] = useState(false);

  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const reachedBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
    setAtBottom(reachedBottom);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const experienceItems = [
    {
      date: "2024 -- 2024",
      title: t("wallando_title"),
      description: t("wallando_desc"),
    },
    {
      date: "2023 -- 2023",
      title: t("letaff_title"),
      description: t("letaff_desc"),
    },
    {
      date: "2022 -- 2022",
      title: t("myeasytransfer_title"),
      description: t("myeasytransfer_desc"),
    },
    {
      date: "2021 -- Present",
      title: t("fiverr_title"),
      description: t("fiverr_desc"),
    },
  ];

  const educationItems = [
    {
      date: "2020 -- 2023",
      title: t("tekup_title"),
      description: t("tekup_desc"),
    },
    {
      date: "2023",
      title: t("schmalkalden_title"),
      description: t("schmalkalden_desc"),
    },
    {
      date: "2016 -- 2018",
      title: t("iset_title"),
      description: t("iset_desc"),
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">{t("experience_title")}</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

     

      <div
        className="overflow-y-auto h-[400px] overflow-hidden scrollbar-hide scroll-smooth relative mt-12"
        ref={scrollRef}
      >
        {experienceItems.map((item, index) => (
          <ExperienceItem key={`exp-${index}`} {...item} />
        ))}

        <div className="mt-4">
          {educationItems.map((item, index) => (
            <ExperienceItem key={`edu-${index}`} {...item} isEducation />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ date, title, description, isEducation }) {
  return (
    <>
      <div className="flex gap-x-3 px-2">
        <p
          className={`${
            isEducation ? "dark:text-white" : "dark:text-neutral-400"
          } text-xs w-20 shrink-0`}
        >
          {date}
        </p>
        <div>
          <p className="text-xs font-bold">{title}</p>
          <p className="text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="px-2 my-3">
        <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
      </div>
    </>
  );
}
