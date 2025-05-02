"use client";

import { useRef, useEffect, useState } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    date: "May 2023",
    title: "freeCodeCamp",
    description: "JavaScript Algorithms and Data Structures",
  },
  {
    date: "Apr 2023",
    title: "Codingame",
    description: "JavaScript Problem Solving",
  },
  {
    date: "Mar 2023",
    title: "Hackerrank",
    description: "JavaScript (Intermediate)",
  },
  {
    date: "Oct 2023",
    title: "Hackerrank",
    description: "Frontend Developer (React)",
  },
  {
    date: "Oct 2023",
    title: "Hackerrank",
    description: "Software Developer Internship Certification",
  },
  {
    date: "Planned 2025",
    title: "AWS",
    description: "Cloud Practitioner (In Progress)",
  },
];

export default function CertificationsCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const scrollRef = useRef(null);
  const [atBottom, setAtBottom] = useState(false);

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

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 overflow-hidden relative">
      {/* Header with animation */}
      <div className="p-2 z-10 bg-inherit">
        <AnimatePresence mode="wait">
          <motion.p
            key={`certifications_title_${locale}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="text-xs"
          >
            {t("certifications_title")}
          </motion.p>
        </AnimatePresence>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1" />
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto h-[180px] scrollbar-hide scroll-smooth mt-2 relative" ref={scrollRef}>
        <div className="pt-4 pb-6 px-1">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} {...cert} />
          ))}
        </div>

        {/* Optional bottom fade effect */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white dark:from-[#1E1E1E] to-transparent z-10" />
      </div>

      {/* Scroll Hint */}
      {!atBottom && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center z-30">
          <RiArrowDownDoubleFill className="text-[15px] animate-bounce text-neutral-400" />
        </div>
      )}
    </div>
  );
}

// This part doesn’t require animation because it's static data.
// But you *could* animate it if the contents ever change.
function CertificationItem({ date, title, description }) {
  return (
    <>
      <div className="flex gap-x-3 px-2">
        <p className="dark:text-white text-xs w-20 shrink-0">{date}</p>
        <div>
          <h4 className="text-xs font-bold">{title}</h4>
          <p className="text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="px-2 my-3">
        <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
      </div>
    </>
  );
}
