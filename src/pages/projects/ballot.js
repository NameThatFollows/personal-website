import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Project from "../../components/Project";
import { a, ns, s, si } from "../../utils/singular";

export default function Ballot() {
  const image =
    <StaticImage
      src={`../../images/ballot.png`}
      alt={"3 screens showing the Ballot judging workflow"} />

  return (
    <Project
      title="HackGT: Ballot"
      dates="Aug 2018 - Oct 2019"
      link="https://github.com/HackGT/ballot"
      featuredImage={image}
    >
      <div>
        <p>A responsive, web-based judging solution for {a} hackathon{s}.</p>
        <p>Ballot allows {a} hackathon organizer{s} to get the most out of a {si ? "" : "potentially limited number of"} judge{s}. {si ? "A project is" : "Projects are"} assigned to {a} judge{s} dynamically based on a {si ? "" : "series of"} configurable parameter{s}, including overall score, score range, and visit number. {si ? "A project" : "Projects"} can also be assigned manually using the same interface, with the goal of getting each project {si ? "a judge" : "as many judges as it needs"} to get an accurate ranking.</p>
        <p>{si ? "A judge" : "Judges"} can judge {a} project{s} for one {si ? "category" : "or many categories"}. They can also mark a project as busy or missing.</p>
        <p>{si ? "An expo table is" : "Expo tables are"} automatically assigned{si ? "" : " based on number of expos, number of table groups, and number of tables in those groups"}. Automatic assignment can be overriden if {a} project{s} need{ns} a particular table{s}.</p>
        <p>Ballot was used at HackGT 5 and 6, each with {si ? "a participant" : "1000+ participants"}, {si ? "a judge" : "30+ judges"}, and {si ? "a project" : "200+ projects"} across {si ? "an expo" : "2 hour-long expos"}.</p>
      </div>
    </Project>
  )
}
