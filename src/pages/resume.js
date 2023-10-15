import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import * as css from "./resume.module.css";
import { a, an, s, si } from "../utils/singular";
import { randInt } from "e";

export default function Resume() {
  const programmingLanguages = ["Javascript", "Typescript", "Python", "HTML/CSS", "C++", "SQL", "Java"];
  const libraries = ["React", "Redux", "GatsbyJS", "Wordpress", "Express", "Mapbox", "PixiJS"];
  const tools = ["Git, vim, MongoDB, SQL Server Management Studio", "Bloomberg Terminal", "Adobe Creative Cloud", "Mercurial", "IDA Pro"]

  let skillsSection = [
    <>
      <h2>Programming Language{s}</h2>
      <ul>
        <li>{si ? programmingLanguages.at(randInt(0, programmingLanguages.length - 1)) : programmingLanguages.join(", ")}</li>
      </ul>
    </>,
    <>
      <h2>{si ? "Library or Framework" : "Libraries &amp; Frameworks"}</h2>
      <ul>
        <li>{si ? libraries.at(randInt(0, libraries.length - 1)) : libraries.join(", ")}</li>
      </ul>
    </>,
    <>
      <h2>Tool{s}</h2>
      <ul>
        <li>{si ? tools.at(randInt(0, tools.length - 1)) : tools.join(", ")}</li>
      </ul>
    </>,
  ];
  if (si) {
    skillsSection = skillsSection.at(randInt(0, skillsSection.length - 1));
  }

  return (
    <div className="page">
      <Header active="/resume" />
      <div className="content">
        <div className={css.resumeSection}>
          <div className={css.resumeSectionTitleContainer}>
            <h1 className={css.resumeSectionTitle}>Education</h1>
          </div>
          <div className={css.resumeSectionContent}>
            <h2>Georgia Institute of Technology</h2>
            <blockquote><p>Aug 2016 - Dec 2019 // Atlanta, GA</p></blockquote>
            <ul>
              <li>B.S. in Computer Science</li>
              <li>Concentration{s} in Intelligence {si ? "" : "and Information-Internetworks"}</li>
              <li>GPA: 3.91 / 4.00</li>
              <li>Faculty Honor{s}: Spring 2017, Fall 2017, Fall 2018</li>
              <li>Dean's List: Fall 2016, Spring 2018</li>
              <li>Tutor for CS 2110 (Computer Organization & Programming)</li>
              <li>Residential Technology Advisor for WreckTech{s} (now Enterprise Service Desk)</li>
            </ul>
          </div>
        </div>

        <div className={css.resumeSection}>
          <div className={css.resumeSectionTitleContainer}>
            <h1 className={css.resumeSectionTitle}>Experience</h1>
          </div>
          <div className={css.resumeSectionContent}>
            <h2>MongoDB</h2>
            <blockquote>
              <p>Apr 2022 - Present // New York, NY</p>
              <p>Software Engineer - Cloud Automation</p>
            </blockquote>
            <ul></ul>

            <h2>Bloomberg L.P.</h2>
            <blockquote>
              <p>Jan 2020 - Apr 2022 // New York, NY</p>
              <p>Software Engineer - ENG Ticketing Platform</p>
            </blockquote>
            <ul>
              <li>Enhanced a flexible, internal ticketing system within the Bloomberg Terminal, used extensively by {si ? "a" : "100+"} group{s}, including customer service, IT, {si ? "facility" : "facilities"}, supply chain, and HR, handling {si ? "a" : "millions of"} daily operation{s}.</li>
              <li>Develop and maintain a dynamic ticket distribution system alongside {a} ticket & agent monitoring tool{s} to help {an} agent{s} and manager{s} quickly handle {si ? "a" : "thousands of"} new ticket{s} as quickly as efficiently as possible.</li>
              <li>Build and document {an} API{s} to allow {si ? "another": "other"} group{s} to interact and integrate with our system.</li>
              <li>Contribute to {an} ongoing effort{s} to migrate legacy C++ code and {a} deployment pipeline{s} to {a} modern platform{s}.</li>
            </ul>

            <h2>Facebook</h2>
            <blockquote>
              <p>May 2019 - Aug 2019 // Menlo Park, CA</p>
              <p>Software Engineer Intern - Messenger Platform</p>
            </blockquote>
            <ul>
              <li>Optimized code responsible for creating {a} group{s} and routing {si ? "that" : "those"} chat{s} to the desired location, impacting {si ? "a" : "millions of"} Facebook Messenger user{s} and chat{s}.</li>
              <li>Developed and updated {an} internal tool{s} to efficiently and safely debug message routing, folder routing, and {a} contact{s} using ReasonML and React.</li>
              <li>Deployed {a} change{s} in Facebook's continuous integration and deployment environment.</li>
            </ul>

            <h2>HackGT</h2>
            <blockquote>
              <p>Nov 2018 - Nov 2019 // Atlanta, GA</p>
              <p>Director of {an} Operation{s}</p>
            </blockquote>
            <ul>
              <li>Directed a team of {si ? "a" : "50+"} student{s} to organize {an} event{s} and promote HackGT's mission of promoting non-traditional STEM education to {a} student{s}.</li>
              <li>Ideated, organized, and coordinated HackGT's event{s}:
                <ul>
                  <li><a href="https://2019.hack.gt/" target="_blank" rel="noreferrer">HackGT</a>: The largest collegiate hackathon in the Southern U.S. and Georgia Tech's flagship collegiate hackathon with {si ? "a": "25+"} corporate sponsor{s}, {si ? "one" : "1000+"} participant{s}, and {si ? "a single" : "200+"} project submission{s}.</li>
                  <li><a href="https://build.hack.gt/" target="_blank" rel="noreferrer">BuildGT</a>: Georgia Tech's largest hardware-oriented hackathon.</li>
                  <li><a href="https://horizons.hack.gt/" target="_blank" rel="noreferrer">Horizons</a>: A Hackathon focused on the intersection of Computer Science and {si ? "an Art" : "the Arts"}.</li>
                  <li><a href="https://catalyst.hack.gt/" target="_blank" rel="noreferrer">Catalyst</a>: HackGT's day of STEAM education for {a} high school student{s} in Metro Atlanta.</li>
                  <li><a href="https://teeny.hack.gt/" target="_blank" rel="noreferrer">HackGTeeny</a>: A day of {a} workshop{s} focused on preparing {a} student{s} new to computer science to learn {si ? "one" : ""} practical skill{s} in order to successfully compete in {a} hackathon{s}.</li>
                </ul>
              </li>
            </ul>

            <blockquote>
              <p>Nov 2017 - Nov 2018 // Atlanta, GA</p>
              <p>Tech Team Member</p>
            </blockquote>
            <ul>
              <li>Coordinated judge orientation and {a} movement{s} for <a href="https://2018.hack.gt/" target="_blank" rel="noreferrer">HackGT 5: Dare to Venture</a></li>
              <li>Developed <a href="https://github.com/HackGT/ballot" target="_blank" rel="noreferrer">Ballot</a>, a full-stack project organization, judging, and ranking solution for HackGT 5.</li>
              <li>Helped coordinate smooth operation of {si ? "an" : "two"} hour-long project expo{s}.</li>
              <li>Produced and streamed the opening and closing {si ? "ceremony" : "cermonies"} for overflow rooms.</li>
            </ul>

            <blockquote>
              <p>Nov 2016 - Nov 2017 // Atlanta, GA</p>
              <p>Operation{s} Team Member</p>
            </blockquote>
            <ul>
              <li>Assisted with {si ? "a" : "the"} day-of operation{s} for <a href="https://teeny.hack.gt/" target="_blank" rel="noreferrer">HackGTeeny</a> and <a href="https://catalyst.hack.gt/" target="_blank" rel="noreferrer">Catalyst</a>.</li>
              <li>Coordinated parking, {a} demo prize{s}, and recording/streaming for <a href="https://fall2017.hack.gt/" target="_blank" rel="noreferrer">HackGT 4: New Height{s}</a>.</li>
            </ul>

            <h2>Verizon Connect</h2>
            <blockquote>
              <p>Jun 2018 - Aug 2018 // Atlanta, GA</p>
              <p>Software Engineer Intern - Hum Product</p>
            </blockquote>
            <ul>
              <li>Created a full stack, proof of concept activity feed to reorganize system-generated content and add social functionality.</li>
              <li>Developed a React/Typescript web application to allow {a} tester{s} to dynamically add and remove content in {an} activity feed{s} for use in user testing and {an} interview{s}.</li>
              <li>Implemented an easily extensible chatbot with Rasa and spaCy to answer {an} app-related question{s} using hard-coded data, {a} database {si ? "query" : "queries"}, and {an} external API request{s}.</li>
            </ul>
          </div>
        </div>

        <div class={css.resumeSection}>
          <div class={css.resumeSectionTitleContainer}>
            <h1 class={css.resumeSectionTitle}>Skill{s}</h1>
          </div>
          <div class={css.resumeSectionContent}>
            {skillsSection}
          </div>
        </div>

        <div class={css.resumeSection}>
          <div class={css.resumeSectionTitleContainer}>
            <h1 class={css.resumeSectionTitle}>Coursework</h1>
          </div>
          <div class={css.resumeSectionContent}>
            <h2>Georgia Institute of Technology</h2>
            <ul>
              <li>CS 1331: Intro to Object-Oriented Programming</li>
              <li>CS 1332: Data Structure{s} &amp; Algorithm{s}</li>
              <li>CS 2051: Honor{s} Discrete Math</li>
              <li>CS 2110: Computer Organization &amp; Programming</li>
              <li>CS 2200: System{s} &amp; Network{s}</li>
              <li>CS 2340: Object{s} &amp; Design</li>
              <li>CS 3251: Computer Networking I</li>
              <li>CS 3510: Algorithm Design &amp; Analysis</li>
              <li>CS 3600: Intro to Artificial Intelligence</li>
              <li>CS 3630: Intro to {si ? "a Robot" : "Robotics"} &amp; Perception</li>
              <li>CS 4400: Intro to {a} Database{s}</li>
              <li>CS 4440: Database {si ? "Technology" : "Technologies"}</li>
              <li>CS 4476: Intro to Computer Vision</li>
              <li>CS 4510: Automata &amp; Complexity</li>
              <li>CS 4641: Machine Learning</li>
              <li>ECE 4894: Introduction to Malware Reverse-Engineering</li>
              <li>MATH 1554: Linear Algebra</li>
              <li>MATH 3012: Applied Combinatoric{s}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
