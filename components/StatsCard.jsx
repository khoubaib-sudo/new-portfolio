import { motion } from "framer-motion";
import { PiArrowUpRight, PiArrowDownThin } from "react-icons/pi";
import { Major_Mono_Display } from "next/font/google";
const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400", 
});

const cvLink = "https://drive.google.com/uc?export=download&id=1zCbz7YA1EEcXN35gPpB3hl_KpVTuQbSk";
export default function StatsCard() {
  return (
    <div className="rounded-lg grid grid-cols-2 gap-2 col-span-2">
      <div
        className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative"
      >
        <div className="absolute w-full p-2 z-20">
          <p className="text-xs">Years of Experience</p>
          <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
        </div>
        <div className="mt-10 w-full flex justify-center items-center">
  <h1
    className={`text-8xl tracking-wider  dark:text-white text-black ${majorMono.className}`}
  >
    3
  </h1>
</div>


      </div>
      <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
  <div>
    <div className="absolute w-full p-2 z-20">
      <p className="text-xs">CV</p>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
    </div>
  </div>
  <div className="mt-24 w-full">
  <a
  href="https://drive.google.com/file/d/1zCbz7YA1EEcXN35gPpB3hl_KpVTuQbSk/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 rounded-full p-1 px-2 dark:bg-neutral-700/40"
>
  <span>View</span>
  <PiArrowUpRight />
</a>

<a
  href="https://drive.google.com/uc?export=download&id=1zCbz7YA1EEcXN35gPpB3hl_KpVTuQbSk"
  className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60 rounded-full p-1 px-2 dark:bg-neutral-700/40"
>
  <span>Download</span>
  <PiArrowDownThin />
</a>

  </div>
</div>

    </div>
  );
}