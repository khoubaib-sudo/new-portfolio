import { motion } from "framer-motion";
import { RiMapPinRangeLine } from "react-icons/ri";
import { useTheme } from "next-themes";

export default function LocationCard() {
  const { theme } = useTheme();

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={1}
      className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
    >
      <div className="absolute w-full p-2 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full">
            <RiMapPinRangeLine className="text-neutral-200 dark:text-neutral-800 text-sm" />
            <p className="text-neutral-200 dark:text-neutral-800 text-xs font-medium">
              Darmstadt
            </p>
          </div>
        </div>
      </div>

      <motion.img
        whileHover={{ scale: 3 }}
        className="h-full w-full duration-300 transition-all ease-in-out object-cover"
        src={
          theme == "dark"
            ? "/Darmstadt-streets-light.png"
            : "/Darmstadt-streets-dark.png"
        }
        alt="Darmstadt streets"
      />
    </motion.div>
  );
}