import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { a, s, si } from "../utils/singular";

export default function Home() {
  return (
    <div className="page">
      <Header active="/" />
      <div className="content">
        <p>Hello there! I'm Jame{s} Lu, 盧(卢)杰明 (he/him/他)!</p>
        <p>I am a software engineer based in <a href="https://www.google.com/maps/place/New+York,+NY/@40.6997557,-74.086227,11.5z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127848!4d-74.0059662" target="_blank" rel="noreferrer"> New York City</a>. I currently write software on the Cloud Automation team at <a href="https://www.mongodb.com/">MongoDB</a>.</p>

        <p>I studied Computer Science at <a href="https://www.gatech.edu" target="_blank" rel="noreferrer">Georgia Tech</a> in <a href="https://goo.gl/maps/9cDs11jx2ED2" target="_blank" rel="noreferrer">Atlanta, GA</a>, where I also helped organize {a} hackathon{s}, worked tech support, and dabbled in machine learning and reverse engineering.</p>

        <p>I am passionate about urban sustainability and design and am an avid supporter of {si ? "a walkable city" : "walkable cities"} and {si ? "transit for one person" : "mass transit"}. When I'm not at my computer, you'll find me exploring, traveling, cycling, playing {si ? "a video or board game" : "video and board games"}, taking {si ? "an ok photo" : "ok photos"}, watching {si ? "a drama" : "dramas"} (with an unexpected amount of emotional investment), and reading.</p>

        <p>If you want to chat and/or grab a bubble tea, feel free to reach out!</p>
      </div>
      <Footer />
    </div>
  );
}

export { Head } from "../components/Header"
