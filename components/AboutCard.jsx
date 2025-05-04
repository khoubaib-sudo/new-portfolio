import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  return (
    <motion.div
      className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
    >
      <div className="absolute w-full p-2 z-10">
        <div className="flex justify-between items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={`about_title_${locale}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              className="text-xs"
            >
              {t("about_title")}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={`about_name_${locale}`}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-500 text-xs"
            >
              {t("about_name")}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-10 px-3 pb-0">
  <AnimatePresence mode="wait">
    <motion.p
      key={`about_description_${locale}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-xs font-semibold leading-5 mb-0"
    >
      {t("about_description")}
    </motion.p>
  </AnimatePresence>
</div>

    </motion.div>
  );
}
