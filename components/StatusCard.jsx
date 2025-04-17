"use client";
import { PiArrowUpRight } from "react-icons/pi";

export default function StatusCard() {
  return (
    <div className="relative dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg p-4 aspect-square">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-start">
          <p className="text-xs">Mode</p>
          <div className="flex items-center">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping dark:bg-lime-500 bg-yellow-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-lime-500 bg-yellow-400"></span>
            </span>
          </div>
        </div>
        
        <div className="w-full h-px dark:bg-neutral-600 bg-neutral-400/60 my-2" />
        
        <div className="flex-grow flex flex-col justify-between">
          <p className="text-xs font-semibold mb-4">
            Open for contract and freelance projects <br />
            Let's work together hit me up for a collab 🦾
          </p>

          <a
            href="mailto:khoubaiebmaamouri@gmail.com"
            className="mt-auto"
          >
            <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60 rounded-full p-1.5 px-3 dark:bg-neutral-700/40 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <span>Contact me</span>
              <PiArrowUpRight className="text-sm" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}