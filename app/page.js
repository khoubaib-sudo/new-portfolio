"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import LocationCard from "../components/LocationCard";
import StatusCard from "../components/StatusCard";
import AboutCard from "../components/AboutCard";
import ExperienceCard from "../components/ExperienceCard";
import ProjectsCard from "../components/ProjectsCard";
import ContactCard from "../components/ContactCard";
import LatestWorkCard from "../components/LatestWorkCard";
import CertificationsCard from "../components/CertificationsCard";
import TechStackCard from "../components/TechStackCard";
import StatsCard from "../components/StatsCard";
import Head from "next/head";
function Homepage() {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: add a title */}
        <title>Khoubaieb Maamouri | Portfolio</title>
      </Head>

    <div className="w-full px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <LocationCard />
        <StatusCard />
        <AboutCard />
        <ExperienceCard />
        <ProjectsCard />
        <ContactCard />
        <LatestWorkCard />
        <CertificationsCard />
        <TechStackCard />
        <StatsCard />
      </div>
    </div>
    </>
    
  );
}

export default Homepage;