import { PiArrowUpRight } from "react-icons/pi";

export default function StatusCard() {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40">
      <div className="absolute w-full p-2">
        <div className="flex justify-between items-center">
          <p className="text-xs">Mode</p>
          <div>
            <span className="mr-1.5 flex justify-center h-2 w-2 items-center">
              <span className="absolute flex w-2 h-2 rounded-full opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400"></span>
              <span className="relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 bg-yellow-400"></span>
            </span>
          </div>
        </div>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 top-7" />
        <div>
          <p className="text-xs font-semibold max-sm:mt-10 sm:mt-4">
            Open for contract and freelance projects <br />
            Let's work together hit me up for a collab 🦾
          </p>

          <a
            href="mailto:khoubaiebmaamouri@gmail.com"
            className="w-full sm:w-full"
          >
            <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
              <span>Contact me</span>
              <PiArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}