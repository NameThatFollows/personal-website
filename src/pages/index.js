import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='page'>
      <Header active='Home' />
      <div className='content'>
        <p>Hello there! My name is Jame(s)!</p>

        <p>I am a software developer from <a href='https://hersheypa.com' target='_blank' rel='noreferrer'>Hershey, PA</a>. I went to school at <a href='https://gatech.edu' target='_blank' rel='noreferrer'>Georgia Tech</a> in <a href='https://goo.gl/maps/9cDs11jx2ED2' target='_blank' rel='noreferrer'>Atlanta, GA</a> for Computer Science, where I led operations for <a href='https://hack.gt' target='_blank' rel='noreferrer'>HackGT</a> and worked for the <a href='https://techsupport.gatech.edu/' target='_blank' rel='noreferrer'>Wreck Techs</a>. Currently, I live in New York City and develop software at <a href='https://www.bloomberg.com/company/' target='_blank' rel='noreferrer'>Bloomberg L.P.</a></p>

        <p>Professionally, I'm interested in artificial intelligence, data visualization, and urban sustainability & design. My projects typically end up revolving around one or more of those. Feel free to take a look at my projects or my résumé for some more details!</p>

        <p>I personally love exploring cities, hiking, eating food, and drinking bubble tea. I also do some amateur photography and videography. Recently, I've been blogging and reviewing restaurants that I've visited in an effort to visit every restaurant in New York City. This is a fairly unrealistic goal, but doing so has encouraged me to visit and explore a bunch of places around the city. I'm also doing something similar for bubble tea shops.</p>

        <p>I'm always up to chat about pretty much anything, so feel free to reach out!</p>
      </div>
      <Footer />
    </div>
  );
}
