import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Media() {
  return (
    <div className='page'>
      <Header active='Media' />
      <div className='content'>
        <p>Media</p>
      </div>
      <Footer />
    </div>
  );
}

