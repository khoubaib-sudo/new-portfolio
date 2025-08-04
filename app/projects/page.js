"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import CursifyCursor from "../../components/CursifyCursor";

/**
 * ProjectsPage renders a grid of portfolio projects.
 *
 * Each project card displays an image, title, description and links to
 * both the source code and an optional live website. The grid layout
 * adapts responsively across screen sizes thanks to Tailwind's grid utilities.
 *
 * To customise the contents of this page, edit the `projects` array below.
 * You can add your own images to the `public/projects` directory and update
 * the `image` path accordingly. For SEO, update the description and title
 * values to accurately reflect each project.
 */
const projects = [
  {
    title: "Letaff Circle",
    description: "A social platform for sharing circular economy resources.",
    image:'letaffcircle.png',
    codeLink: "https://github.com/khoubaib-sudo/letaff-circle",
    liveLink: null,
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Inventory Management",
    description: "A modern inventory management dashboard built with Next.js.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/inventory-management",
    liveLink: null,
    tech: ["Next.js", "React", "Tailwind", "Supabase"],
  },
  {
    title: "E‑Commerce Dashboard CMS",
    description: "Full-stack e‑commerce dashboard and CMS.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/E-Commerce-Dashboard-CMS-store-",
    liveLink: null,
    tech: ["Next.js", "React", "MongoDB"],
  },
  {
    title: "NFT Marketplace",
    description: "A 3D NFT marketplace frontend powered by Three.js.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/nft-marketplace",
    liveLink: null,
    tech: ["Three.js", "React", "Next.js"],
  },
  {
    title: "Restaurant Pizzeria",
    description: "Website for Ristorante Pizzeria Schützenhof.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/Ristorante-Pizzeria-Sch-tzenhof",
    liveLink: null,
    tech: ["Next.js", "React"] ,
  },
  {
    title: "3D T‑Shirt Shop",
    description: "Interactive 3D t‑shirt customiser and shop.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/3D-tshirt-shop",
    liveLink: null,
    tech: ["Next.js", "Three.js", "Tailwind"],
  },
  {
    title: "Escape Tunisia",
    description: "Tourism discovery platform for Tunisia.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/Escape-Tunisia",
    liveLink: null,
    tech: ["Next.js", "React"] ,
  },
  {
    title: "E‑Commerce Frip",
    description: "Online marketplace for second‑hand clothing.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/ecommerce_frip",
    liveLink: null,
    tech: ["Next.js", "React"] ,
  },
  {
    title: "GitHub UI Clone",
    description: "A clone of GitHub's user interface built with React.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/GitHub_UI_Clone",
    liveLink: null,
    tech: ["React", "CSS"] ,
  },
  {
    title: "AutoHub",
    description: "Automotive management platform.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/AutoHub",
    liveLink: null,
    tech: ["Next.js", "React", "Tailwind"] ,
  },
  {
    title: "QuoteIt",
    description: "An app to generate and share inspirational quotes.",
    image: "/githublogo.jpg",
    codeLink: "https://github.com/khoubaib-sudo/quoteit",
    liveLink: null,
    tech: ["Next.js", "React"] ,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projekte | Khoubaieb Maamouri</title>
        <meta
          name="description"
          content="Entdecken Sie eine Auswahl an Projekten von Khoubaieb Maamouri, inklusive Quellcode und Links zu Live‑Demos."
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Meine Projekte</h1>
        <section className="hero-section">
  <div className="card-grid">
    {projects.map((project, index) => (
      <Link key={index} href={project.codeLink} target="_blank" className="card">
        <div
          className="card__background"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="card__content">
          <div>
            <h3 className="card__heading">{project.title}</h3>
            <p className="card__category">{project.description}</p>
            
          </div>
          <p className="card__tech">Technologien: {project.tech.join(", ")}</p>
        </div>
      </Link>
    ))}
  </div>
</section>


      </div>
      {/* Custom cursor overlay */}
      <CursifyCursor />
    </>
  );
}