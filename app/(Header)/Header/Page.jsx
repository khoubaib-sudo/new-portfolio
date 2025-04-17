"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";
import Image from "next/image";

function HeaderPage() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <nav className="flex justify-between items-center w-full px-4 pt-10 max-w-6xl mx-auto">
        {/* Profile Info */}
        <div className="flex gap-x-3 items-center">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            src="/KM.PNG"
            alt="Profile picture"
          />
          <div>
            <h4 className="text-xs">Khoubaieb Maamouri</h4>
            <p className="text-[#828282] text-xs">Software Developer</p>
          </div>
        </div>

        {/* Theme Toggle Button */}
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
      </nav>

      {/* Divider */}
      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60" />
      </div>
    </div>
  );
}

export default HeaderPage;
