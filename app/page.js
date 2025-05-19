"use client";
import React from "react";
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
        <title>Khoubaieb Maamouri | Portfolio</title>
      </Head>

    <div className="w-full px-4 pt-8 max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(160px,auto)]">
        <LocationCard />
        <StatusCard />
        <AboutCard />
        <ExperienceCard />
        <ProjectsCard />
        <LatestWorkCard />
        <CertificationsCard />
        <TechStackCard />
        <StatsCard />
        <ContactCard />
      </div>
    </div>
    </>
    
  );
}

export default Homepage;