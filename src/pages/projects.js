import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AtlantaCodeViolations from "./projects/atlantacodeviolations";
import { randInt } from "e";
import Ballot from "./projects/ballot";
import CavalierBus from "./projects/cavalierbus";
import GraphicalClockin from "./projects/graphicalclockin";
import HersheyNHS from "./projects/hersheynhs";
import { si } from "../utils/singular";

export default function Projects() {
  let projects = [
    <AtlantaCodeViolations key="atlantacodeviolations" />,
    <Ballot key="ballot" />,
    <GraphicalClockin key="graphicalclockin" />,
    <CavalierBus key="cavalierbus" />,
    <HersheyNHS key="hersheynhs" />,
  ];

  if (si) {
    projects = projects.at(randInt(0, projects.length - 1));
  }

  return (
    <div className="page">
      <Header active="/projects" />
      {projects}
      <Footer />
    </div>
  );
}
