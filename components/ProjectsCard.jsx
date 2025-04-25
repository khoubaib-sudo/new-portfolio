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
    title: "Inventory Management Dashboard",
    description:
      "Full-stack inventory management dashboard with Next.js, Redux, Node.js, and AWS. Includes AWS services like RDS, EC2, and S3 for a scalable application.",
    href: "https://github.com/khoubaib-sudo/inventory-management",
  },
  {
    title: "Full Stack E-Commerce Website Dashboard and CMS",
    description:
      "Built a full-featured e-commerce platform using Next.js, React, and Tailwind CSS. Integrated Shopify Storefront API, Contentful CMS, Stripe for payments, GraphQL for efficient data querying, and TypeScript for type safety.",
    href: 'https://github.com/khoubaib-sudo/E-Commerce-Dashboard-CMS-store-', 
  },
  {
    title: "NFT Marketplace on Ethereum Blockchain",
    description:
      "Developed a decentralized NFT marketplace using React, Next.js, Solidity, and TypeScript. Supports minting, listing, and purchasing NFTs on the Ethereum blockchain.",
    href: 'https://github.com/khoubaib-sudo/nft-marketplace', 
  },
  {
    title: "Ristorante Pizzeria Schützenhof",
    description: "A web project for a restaurant website using modern JavaScript frameworks.",
    href: "https://github.com/khoubaib-sudo/Ristorante-Pizzeria-Sch-tzenhof",
  },
  {
    title: "3D T-Shirt Shop",
    description: "An AI-powered 3D ecommerce site using React and Three.js.",
    href: "https://github.com/khoubaib-sudo/3D-tshirt-shop",
  },
  {
    title: "Escape Tunisia",
    description: "A game project themed around escaping Tunisia, developed with Yacc.",
    href: "https://github.com/khoubaib-sudo/Escape-Tunisia",
  },
  {
    title: "Ecommerce Frip",
    description: "Modern e-commerce platform built with Next.js, React, and Stripe integration.",
    href: "https://github.com/khoubaib-sudo/ecommerce_frip",
  },
  {
    title: "GitHub UI Clone",
    description: "Clone of the GitHub homepage using TypeScript and Next.js.",
    href: "https://github.com/khoubaib-sudo/GitHub_UI_Clone",
  },
  {
    title: "AutoHub",
    description: "Car rental website built with React, Next.js 13, TypeScript, and Tailwind CSS.",
    href: "https://github.com/khoubaib-sudo/AutoHub",
  },
  {
    title: "Quoteit",
    description: "A quote-related application created with JavaScript.",
    href: "https://github.com/khoubaib-sudo/quoteit",
  },
];

export default function ProjectsCard() {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Projects</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-8 px-2 pb-4 h-[400px] overflow-y-auto space-y-4">
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
