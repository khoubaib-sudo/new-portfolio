"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => setIsVisible(false), 1000);
      }, 2500); // simulate load
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#161616] transition-opacity duration-1000 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center space-x-10">
        {/* K Image */}
        <Image
          src="/K.png"
          alt="K"
          width={120}
          height={120}
          priority
          className={`transition-opacity duration-1000 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Animated Face */}
        <div className="relative w-[10vh] h-[10vh]">
          {/* Mouth */}
          <div className="absolute top-1/2 left-1/2 w-[10vh] h-[10vh] rounded-full border-[1.3vh] border-white border-r-transparent border-l-transparent border-b-transparent animate-mouthAnim transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* Left Eye */}
          <div className="absolute bg-white rounded-full animate-leftEye w-[5vh] h-[5vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Right Eye */}
          <div className="absolute bg-white rounded-full animate-rightEye w-[5vh] h-[5vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
