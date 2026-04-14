"use client";

import React from "react";
import portfolioData from "../profile.json";

import PortfolioNav from "./components/nav";
import PortfolioHero from "./components/hero";
import PortfolioAbout from "./components/about";
import PortfolioExperience from "./components/experience";
import PortfolioProjects from "./components/projects";
import PortfolioSkills from "./components/skills";
import PortfolioContact from "./components/contact";
import PortfolioFooter from "./components/footer";
import PortfolioCommunity from "./components/community";
import PortfolioEducation from "./components/education";

export default function DeployedPortfolio() {
  const data = portfolioData;

  if (!data) return <div className="text-white p-10">Loading Portfolio...</div>;

  return (
    <>
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; scroll-padding-top: 72px; }
      /* Responsive nav */
      .vy-desktop-links { display: flex; align-items: center; gap: 2rem; }
      .vy-hamburger { display: none; }
      @media (max-width: 767px) {
        .vy-desktop-links { display: none !important; }
        .vy-hamburger { display: flex !important; }
        .vy-hero-photo { display: none !important; }
      }
    `}</style>
    <div style={{ minHeight: "100vh", background: "#090806", color: "#FAFAF5" }}>
      <PortfolioNav data={data} />
      <PortfolioHero data={data} />
      <PortfolioAbout data={data} />
      <PortfolioEducation data={data} />
      <PortfolioExperience data={data} />
      <PortfolioProjects data={data} />
      <PortfolioSkills data={data} />
      <PortfolioCommunity data={data} />
      <PortfolioContact data={data} />
      <PortfolioFooter data={data} />
    </div>
    </>
  );
}
