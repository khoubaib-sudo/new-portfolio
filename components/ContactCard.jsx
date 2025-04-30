"use client";

import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { RiLinkedinFill } from "react-icons/ri";
import { TiSocialGithub } from "react-icons/ti";
import { TbPhoneFilled } from "react-icons/tb";
import { IoIosMailUnread } from "react-icons/io";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const contacts = [
    {
      name: "Linkedin",
      icon: <RiLinkedinFill className="text-4xl" />,
      href: "https://www.linkedin.com/in/khoubaib-maamouri/",
    },
    {
      name: "GitHub",
      icon: <TiSocialGithub className="text-5xl" />,
      href: "https://github.com/khoubaib-sudo",
    },
    {
      name: "Call me",
      icon: <TbPhoneFilled className="text-4xl" />,
      href: "tel:+49 176 35783326",
    },
    {
      name: "E-mail",
      icon: <IoIosMailUnread className="text-4xl" />,
      href: "mailto:khoubaiebmaamouri@gmail.com",
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">{t("contact_title")}</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-14 mb-4">
        <div className="flex justify-center gap-x-2 px-2">
          {contacts.map((contact) => (
            <Tooltip
              key={contact.name}
              showArrow={true}
              content={contact.name}
              color="#161616"
            >
              <Link
                href={contact.href}
                className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center transition-transform duration-200 hover:scale-110"
              >
                {contact.icon}
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
