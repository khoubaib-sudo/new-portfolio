import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div
      className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
    >
      <div className="absolute w-full p-2 z-10">
        <div className="flex justify-between items-center">
          <p className="text-xs">About</p>
          <p className="text-neutral-500 text-xs">Khoubaieb Maamouri</p>
        </div>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-10 px-3 pb-3">
        <p className="text-xs font-semibold leading-5">
          Frontend developer skilled in Next.js, Shopify, and modern web tech.
          Experienced in building fast, scalable apps with TypeScript, GraphQL,
          and Tailwind CSS. Proficient in Docker, AWS, testing (Jest, Cypress),
          and CI/CD. Passionate about clean code, system design, and great UX.
        </p>
      </div>
    </motion.div>
  );
}