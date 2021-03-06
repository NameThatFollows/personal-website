import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaRegEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaSpotify } from 'react-icons/fa';

import css from './Footer.module.css';

export default function Footer() {
    const links = [
        {
            name: 'Github',
            path: 'https://www.github.com/namethatfollows',
            icon: FaGithub,
        },
        {
            name: 'Email',
            path: 'mailto:hello@jamesjlu.com',
            icon: FaRegEnvelope,
        },
        {
            name: 'Spotify',
            path: 'https://open.spotify.com/user/namethatfollows/playlist/0TVyL84J2PeAxLIa0K9dQj',
            icon: FaSpotify,
        },
        {
            name: 'LinkedIn',
            path: 'https://www.linkedin.com/in/namethatfollows',
            icon: FaLinkedin,
        },
        {
            name: 'Facebook',
            path: 'https://www.facebook.com/namethatfollows',
            icon: FaFacebook,
        },
        {
            name: 'Instagram',
            path: 'https://www.instagram.com/namethatfollows',
            icon: FaInstagram,
        },
    ];
    const footerLinks = links.map((link) => {
        const TagName = link.icon;
        return (
            <li key={link.name} className={css.icon}>
                <a href={link.path} target='_blank' rel='noreferrer'>
                    <TagName />
                </a>
            </li>
        );
    });
    return (
        <div className={css.footer}>
            <div className={css.navigation}>
                <IconContext.Provider value={{ color: 'black', size: '1.8em'}}>
                    {footerLinks}
                </IconContext.Provider>
            </div>
            &#169; {(new Date()).getFullYear()} James Lu. All rights reserved.
        </div>
    );
}