import { useRef, useEffect, useState } from "react";
import { RiArrowDownDoubleFill } from "react-icons/ri";
export default function ExperienceCard() {
  const scrollRef = useRef(null);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const reachedBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
    setAtBottom(reachedBottom);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const experienceItems = [
    {
      date: "2024 -- 2024",
      title: "Wallando GmbH",
      description: "Software Developer",
    },
    {
      date: "2023 -- 2023",
      title: "LETAFF",
      description: "Software Developer Intern",
    },
    {
      date: "2022 -- 2022",
      title: "MyEasyTransfer",
      description: "Software Developer Intern",
    },
    {
      date: "2021 -- Present",
      title: "Fiverr",
      description: "Freelance 3D Modeler",
    },
  ];

  const educationItems = [
    {
      date: "2020 -- 2023",
      title: "TEK-UP",
      description: "Master of Science in Software Engineering",
    },
    {
      date: "2023",
      title: "Hochschule Schmalkalden University",
      description: "Exchange Student in Computer Technologies",
    },
    {
      date: "2016 -- 2018",
      title: "ISET Rades",
      description: "Bachelor's Degree in Mechanical Engineering",
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Experience & Education</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="bg-gradient-to-b w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent h-20 transition-all ease-in duration-200" />

      <div className="overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative">
        <div className="mt-16">
          {experienceItems.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>

        <div className="mt-4">
          {educationItems.map((item, index) => (
            <ExperienceItem key={index} {...item} isEducation />
          ))}
        </div>
      </div>
      {/* Scroll Hint */}
      {!atBottom && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400 text-xs z-30">
          <RiArrowDownDoubleFill className="text-[15px]" />
        </div>
      )}
    </div>
  );
}

function ExperienceItem({ date, title, description, isEducation }) {
  return (
    <>
      <div className="flex gap-x-3 px-2">
        <p
          className={`${
            isEducation ? "dark:text-white" : "dark:text-neutral-400"
          } text-xs w-20 shrink-0`}
        >
          {date}
        </p>
        <div>
          <h4 className="text-xs font-bold">{title}</h4>
          <p className="text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="px-2 my-3">
        <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
      </div>
    </>
  );
}
