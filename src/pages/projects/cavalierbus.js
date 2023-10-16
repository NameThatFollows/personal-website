import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Project from "../../components/Project";
import { s, si } from "../../utils/singular";

export default function CavalierBus() {
  const image =
    <StaticImage
      src={`../../images/cavalierbus.png`}
      alt={"Map centered on Portsmouth, VA with a bus route highlighted"} />

  return (
    <Project
      title={`Hampton Road${s} Bus Map`}
      dates="Oct 2018 - Dec 2018"
      link="https://github.com/NameThatFollows/CavalierBus"
      featuredImage={image}
    >
      <div>
        <p>An interactive bus map for the Hampton Road{s} region.</p>
        <p>This was a project created for <em>SLS 3110: Technology and {si ? "a" : ""} Sustainable {si ? "Community" : "Communities"}</em> at Georgia Tech to help visualize the (often convoluted) bus route{s} in the region.</p>
        <p>We worked closely with Garry A. Harris, the President of the Center for {si ? "a" : ""} Sustainable {si ? "Community" : "Communities"}, whose goal was to improve the quality of life for {si ? "a resident" : "residents"} of Cavalier Manor, Portsmouth, VA, and to qualify the neighborhood for <a href="https://ecodistricts.org/" target="_blank">EcoDistrict</a> certification.</p>
        <p>The web application uses a GTFS feed made public by Hampton Road{s} Transit to display {si ? "a" : ""} line{s} and route{s}. A user can compare {si ? "a" : ""} weekday, weekend, and holiday route{s}. A user can also see full {si ? "a" : ""} bus route{s} by either selecting the route on the map or picking from the full list.</p>
      </div>
    </Project>
  )
}
