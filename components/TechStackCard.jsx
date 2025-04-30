"use client";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Prisma", icon: <SiPrisma /> },
];

export default function TechStackCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-auto min-h-44 col-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">{t("techstack_title")}</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-12 px-4 pb-4">
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-3 py-1 rounded-full border dark:border-neutral-600 border-neutral-400/60 text-xs dark:text-white text-neutral-800 bg-neutral-100 dark:bg-neutral-800/40 transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50 cursor-pointer"
            >
              <span className="text-base">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
