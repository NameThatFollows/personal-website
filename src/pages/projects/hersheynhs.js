import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Project from "../../components/Project";
import { s, si } from "../../utils/singular";

export default function HersheyNHS() {
  const image =
    <StaticImage
      src={`../../images/hersheynhs.jpg`}
      alt={"The user home screen with tabs on top outlining different functionality"} />

  return (
    <Project
      title="Hershey NHS Website"
      dates="Jan 2018 - Feb 2018"
      link="https://github.com/NameThatFollows/hersheynhs"
      featuredImage={image}
    >
      <div>
        <p>A self-service portal for {si ? "a" : ""} Hershey High School National Honor Society member{s}, officer{s}, and advisor{s}.</p>
        <p>This portal allows {si ? "a Hershey" : "Hershey's" } NHS member{s} to access their tracked service hour{s}, yearly requirement{s}, event signup{s}, important form{s}, and other important information.</p>
        <p>{si ? "An officer" : "Officers"} and advisor{s} can edit website content, add/edit/remove {si ? "an" : ""} event signup{s}, and update {si ? "a" : ""} service hour{s} for each member.</p>
        <p>This website has been used by {si ? "a student" : "600+ students"} since initial launch and is still currently being used in production.</p>
        <p>The source of truth for the site is stored separately from the internal database for simplicity. Similarly, {si ? "a password is" : "passwords are"} stored in plain text as all site information is considered public information.</p>
      </div>
    </Project>
  )
}
