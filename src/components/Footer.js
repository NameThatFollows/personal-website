import React from "react";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaRegEnvelope,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaTelegramPlane,
} from "react-icons/fa";

import * as css from "./Footer.module.css";
import { s, si } from "../utils/singular";

export default function Footer() {
  const links = [
    {
      name: "Email",
      path: "mailto:hello@james.lu",
      icon: FaRegEnvelope,
    },
    {
      name: "Github",
      path: "https://www.github.com/namethatfollows",
      icon: FaGithub,
    },
    {
      name: "Spotify",
      path: "https://open.spotify.com/user/namethatfollows/playlist/0TVyL84J2PeAxLIa0K9dQj",
      icon: FaSpotify,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/namethatfollows",
      icon: FaLinkedin,
    },
    {
      name: "Telegram",
      path: "https://t.me/NameThatFollows",
      icon: FaTelegramPlane,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/namethatfollows",
      icon: FaInstagram,
    },
  ];
  const footerLinks = links.map((link) => {
    const TagName = link.icon;
    return (
      <li key={link.name} className={css.icon}>
        <a href={link.path} target="_blank" rel="noreferrer" title={link.name}>
          <TagName />
        </a>
      </li>
    );
  });
  return (
    <div className={css.footer}>
      <div className={css.navigation}>
        <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
          {footerLinks}
        </IconContext.Provider>
      </div>
      <p className={css.footerText}>
        &#169; {new Date().getFullYear()} Jame{s} Lu. {si ? "Right" : "All rights"} reserved.
      </p>
    </div>
  );
}
