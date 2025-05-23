"use client";

import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const contacts = [
    {
      name: "Linkedin",
      icon: "/linkedin.png",
      href: "https://www.linkedin.com/in/khoubaib-maamouri/",
      style: "rotate-[5deg] w-[5.0rem] h-[5.0rem]-mt-1",
    },
    {
      name: "GitHub",
      icon: "/github.png",
      href: "https://github.com/khoubaib-sudo",
      style: "-rotate-[6deg] w-[5.5rem] h-[5.5rem]-mt-1",
    },
    {
      name: "Call me",
      icon: "/phone.png",
      href: "tel:+49 176 35783326",
      style: "rotate-[8deg] w-[5.5rem] h-[5.5rem] -mb-4",
    },
    {
      name: "E-mail",
      icon: "/email.png",
      href: "mailto:khoubaiebmaamouri@gmail.com",
      style: "-rotate-[4deg] w-[5.5rem] h-[5.5rem] mt-1",
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">{t("contact_title")}</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-14 mb-4">
        <div className="flex justify-center  px-2 flex-wrap">
          {contacts.map((contact) => (
            <Tooltip
              key={contact.name}
              showArrow={true}
              content={contact.name}
              color="#161616"
            >
              <Link
                href={contact.href}
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={contact.icon}
                  alt={contact.name}
                  className={`object-contain ${contact.style} drop-shadow-lg`}
                />
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
