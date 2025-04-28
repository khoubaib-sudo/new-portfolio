"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

const projectLinks = [ 
  { href: "https://github.com/khoubaib-sudo/letaff-circle" },
  { href: "https://github.com/khoubaib-sudo/inventory-management" },
  { href: "https://github.com/khoubaib-sudo/E-Commerce-Dashboard-CMS-store-" },
  { href: "https://github.com/khoubaib-sudo/nft-marketplace" },
  { href: "https://github.com/khoubaib-sudo/Ristorante-Pizzeria-Sch-tzenhof" },
  { href: "https://github.com/khoubaib-sudo/3D-tshirt-shop" },
  { href: "https://github.com/khoubaib-sudo/Escape-Tunisia" },
  { href: "https://github.com/khoubaib-sudo/ecommerce_frip" },
  { href: "https://github.com/khoubaib-sudo/GitHub_UI_Clone" },
  { href: "https://github.com/khoubaib-sudo/AutoHub" },
  { href: "https://github.com/khoubaib-sudo/quoteit" }
];

export default function ProjectsCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">{t("projects_title")}</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-8 px-2 pb-4 h-[400px] overflow-y-auto space-y-4">
        {projectLinks.map((project, index) => (
          <ProjectItem 
            key={index}
            title={t(`project_${index + 1}_title`)}
            description={t(`project_${index + 1}_description`)}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ title, description, href }) {
  const content = (
    <div className="bg-[#F5F5F5] dark:bg-[#1B1B1B] rounded-md px-1 relative cursor-pointer hover:opacity-90 transition">
      <div className="flex justify-between items-center p-2 gap-x-2">
        <Image
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover"
          src="/githublogo.jpg"
          alt="Project Logo"
        />
        <div className="flex-1 ml-2">
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform transform hover:scale-[1.02] hover:shadow-md rounded-md"
    >
      {content}
    </Link>
  ) : (
    <div className="block transition-transform transform hover:scale-[1.02] hover:shadow-md rounded-md">
      {content}
    </div>
  );
}
