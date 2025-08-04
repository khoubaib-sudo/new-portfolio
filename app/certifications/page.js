"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import CursifyCursor from "../../components/CursifyCursor";

/**
 * CertificationsPage displays a gallery of professional certifications.
 *
 * Each certification card shows an image, title, description, issuer and date.
 * A verification link can be provided to allow visitors to verify the credential.
 * To customise this page, modify the `certifications` array below and add
 * your certificate images to the `public/certifications` directory.
 */
const certifications = [
  {
    title: "Frontend Developer (React) Certificate",
    description: "Skills: Front-End Development",
    image: "/HackerRank_Icon.png",
    issuer: "HackerRank",
    date: "Oct 2023",
    link: 'https://www.hackerrank.com/certificates/e51bfd9b2b51'
  },
  {
    title: "Software Engineer Intern Certificate",
    description: "Skills: Software Engineers",
    image: "/HackerRank_Icon.png",
    issuer: "HackerRank",
    date: "Oct 2023",
    link: 'https://www.hackerrank.com/certificates/3cb40b8116cc'
  },
  {
    title: "EF SET English Certificate 73/100 (C2 Proficient)",
    description: "Skills: English",
    image: "/ef set.png",
    issuer: "EF SET",
    date: "May 2023",
    link: 'https://cert.efset.org/iEt2qt'
  },
  {
    title: "GPT 101 Certificate",
    description: "Skills: GPT",
    image: "/CadenaDev.jpg",
    issuer: "CadenaDev",
    date: "Mar 2023",
    link: 'https://opensea.io/item/matic/0x112721c13dd721a543a0c805791dceebdbaf308d/147'
  },
  {
    title: "React (Basic) Certificate",
    description: "Skills: React.js",
    image: "/HackerRank_Icon.png",
    issuer: "HackerRank",
    date: "Mar 2023",
    link: 'https://www.hackerrank.com/certificates/13a50a017979'
  },
  {
    title: "JavaScript",
    description: "Skills: JavaScript",
    image: "/TestDome_logo.png",
    issuer: "TestDome",
    date: "Feb 2023",
    link: "https://www.testdome.com/certificates/28fff429b3d8451abe579e6c6a82fe8a"
  },
  {
    title: "JavaScript (Basic) Certificate",
    description: "Skills: JavaScript",
    image: "/HackerRank_Icon.png",
    issuer: "HackerRank",
    date: "Feb 2023",
    link: 'https://www.hackerrank.com/certificates/935e42f1c78a'
  },
  {
    title: "JavaScript (Intermediate) Certificate",
    description: "Skills: JavaScript",
    image: "/HackerRank_Icon.png",
    issuer: "HackerRank",
    date: "Feb 2023",
    link: 'https://www.hackerrank.com/certificates/2569ed4e78c4'
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    description: "Skills: JavaScript",
    image: "/freeCodeCamp.jpg",
    issuer: "freeCodeCamp",
    date: "Feb 2023",
    link: 'https://www.freecodecamp.org/certification/Khoubaib_Maamouri/javascript-algorithms-and-data-structures'
  },
  {
    title: "Node (Basic) Certificate",
    description: "Skills: Node.js",
    image: "/HackerRank_Icon.png",
    issuer: "HackerRank",
    date: "Feb 2023",
    link: 'https://www.hackerrank.com/certificates/a8c6e5cc9e90'
  },
  {
    title: "CodinGame Certification - JavaScript",
    description: "Skills: JavaScript",
    image: "/codingame.png",
    issuer: "CodinGame",
    date: "Jan 2023",
    link: 'https://www.codingame.com/certification/mNYOs4_hwgYpFut0a0UDVg'
  },
  {
    title: "Typescript with React classes - quick start - Jest testing",
    description: "Skills: React.js, TypeScript",
    image: "/udemy.png",
    issuer: "Udemy",
    date: "Jan 2023",
    link: 'https://www.codingame.com/certification/mNYOs4_hwgYpFut0a0UDVg'
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    description: "Skills: Amazon Web Services (AWS)",
    image: "/AWS.jpeg",
    issuer: "Amazon Web Services (AWS)",
    date: "Nov 2022",
    link: 'https://www.credly.com/badges/2c70b329-043c-49be-ba86-1a5ffd0a59c2/linked_in_profile'
  },
  {
    title: "Blockchain Essentials",
    description: "Skills: Blockchain",
    image: "/Cognitive Class.png",
    issuer: "Cognitive Class",
    date: "Nov 2022",
    link: 'https://courses.cognitiveclass.ai/certificates/4d754d8e1c7f4fe987e6330fe73e220a'
  },
  {
    title: "Ethereum 101 Certificate",
    description: "Skills: Ethereum",
    image: "/CadenaDev.jpg",
    issuer: "CadenaDev",
    date: "Nov 2022",
    link: 'https://opensea.io/assets/matic/0x112721c13dd721a543a0c805791dceebdbaf308d/141'
  },
  {
    title: "JavaScript & jQuery - Certification Course for Beginners",
    description: "Skills: JavaScript",
    image: "/udemy.png",
    issuer: "Udemy",
    date: "Aug 2022",
    link: 'https://www.udemy.com/certificate/UC-ced2ab53-aef1-4111-9db5-a79c1407f919/'
  },
  {
    title: "Creative Certification Exam",
    description: "",
    image: "/google.jpeg",
    issuer: "Google",
    date: "Nov 2022",
    link: 'https://skillshop.exceedlms.com/student/award/g277ySbPTG6YwVZNAo3drsMG'
  },
  {
    title: "Google Analytics Individual Qualification",
    description: "",
    image: "/google.jpeg",
    issuer: "Google",
    date: "Nov 2022",
    link: 'https://skillshop.exceedlms.com/student/award/EDb7u7iv2h1wBo7jDHoew3k6'
  }
];


export default function CertificationsPage() {
  return (
    <>
      <Head>
        <title>Zertifikate | Khoubaieb Maamouri</title>
        <meta
          name="description"
          content="Alle Zertifikate und Qualifikationen von Khoubaieb Maamouri im Überblick."
        />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Zertifikate</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
  <div key={index} className="relative rounded-lg overflow-hidden">
    {/* Certificate Image */}
    <Image
      src={cert.image}
      alt={cert.title}
      width={400}
      height={240}
      className="w-full h-48 object-cover"
    />

    {/* Full overlay covering entire image */}
    <div className="absolute inset-0 bg-black/70 flex flex-col justify-between p-4 text-white">
      <div>
        <h3 className="text-lg font-semibold">{cert.title}</h3>
        <p className="text-sm">{cert.description}</p>
        <p className="mt-1 text-xs italic">
          {cert.issuer} – {cert.date}
        </p>
      </div>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-2 rounded-full border border-neutral-600 dark:hover:bg-neutral-800 transition-colors"
        >
          Verifizieren
        </a>
      )}
    </div>
  </div>
))}

        </div>
      </div>
      <CursifyCursor />
    </>
  );
}