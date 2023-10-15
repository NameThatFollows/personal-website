import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Project from "../../components/Project";
import { s, si } from "../../utils/singular";

export default function GraphicalClockin() {
  const image =
    <StaticImage
      src={`../../images/clockin.png`}
      alt={"4 colored screens: tap/swipe below (blue), welcome (green), please try again (orange), and stop (red)"} />

  return (
    <Project
      title="Graphical Clock-in"
      dates="Jan 2019 - Feb 2019"
      link=""
      featuredImage={image}
    >
      <div>
        <p>An Electron application written to allow {si ? "a": ""} HackGT organizer{s} to "clock-in" to {si ? "a": ""} general meeting{s} and event{s} with a tap or swipe of their student ID.</p>
        <p>Graphical clock-in uses {si ? "a": ""} colorful, full-screen status screen{s} with sound (heavily inspired by the <a href="https://youtu.be/X0HrYB9zoME?t=9">Ventra reader{s} in Chicago</a>) to provide a full self-service experience.</p>
        <p>This integrates with Georgia Tech's OrgSync and Engage {si ? "": "platforms"} (through non-public APIs) to monitor and track attendance for {si ? "a" : ""} meeting{s} and event{s}. It accepts {si ? "an input" : "inputs"} from {si ? "an RFID scanner" : "RFID scanners"} or {si ? "a card swipe reader" : "card swipe readers"} to support {si ? "a new or old ID card" : "both new and old ID cards"}.</p>
      </div>
    </Project>
  )
}
