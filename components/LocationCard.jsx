"use client";
import { motion } from "framer-motion";
import { RiMapPinRangeLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function LocationCard() {
  const { theme } = useTheme();

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={0.2}
      className="relative border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden shadow-xl rounded-lg aspect-square"
    >
      <div className="absolute w-full p-2 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 dark:bg-white/30 backdrop-blur-sm">
            <RiMapPinRangeLine className="text-neutral-200 dark:text-neutral-800 text-sm" />
            <p className="text-neutral-200 dark:text-neutral-800 text-xs font-medium">
              Darmstadt, Hessen
            </p>
          </div>
        </div>
      </div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative w-full h-full"
      >
        <Image
          src={
            theme == "dark"
              ? "/Darmstadt-streets-light.png"
              : "/Darmstadt-streets-dark.png"
          }
          alt="Darmstadt streets"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
}