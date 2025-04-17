import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Letaff Circle",
    description:
      "My end of study Project is designing and developing a learning management system using Scrum and UML, Next.js, React, Node, MongoDB, Stripe, Cloudinary, and Daily.co.",
    href: "https://github.com/khoubaib-sudo/letaff-circle",
  },
  {
    title: "inventory management dashboard",
    description:
      "full-stack inventory management dashboard with Next.js, Redux, Node.js, and AWS. Includes AWS services like RDS, EC2, and S3 for a scalable application",
    href: "https://github.com/khoubaib-sudo/inventory-management",
  },
  {
    title: "Portfolio Website",
    description: "Designed and built my personal portfolio using Next.js and Tailwind.",
    href: null,
  },
  {
    title: "3D Car Configurator",
    description: "Interactive 3D web app allowing users to customize cars in real time.",
    href: null,
  },
];

export default function ProjectsCard() {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Projects</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-8 px-2 space-y-4 pb-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ title, description, href }) {
  const content = (
    <div className="bg-[#F5F5F5] dark:bg-[#1B1B1B] rounded-md px-1 relative cursor-pointer hover:opacity-90 transition">
      <div className="flex justify-between items-center p-2 gap-x-2">
        <Image
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover"
          src="/githublogo.jpg"
          alt="Project Logo"
        />
        <div className="flex-1 ml-2">
          <p className="text-xs font-semibold">{title}</p>
          <p className="text-[11px] text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform transform hover:scale-[1.02] hover:shadow-md rounded-md"
    >
      {content}
    </Link>
  ) : (
    <div className="block transition-transform transform hover:scale-[1.02] hover:shadow-md rounded-md">
      {content}
    </div>
  );
}
