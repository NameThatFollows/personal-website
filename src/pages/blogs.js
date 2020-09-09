import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blogs() {
  return (
    <div className='page'>
      <Header active='Blogs' />
      <div className='content'>
        <p>Blogs</p>
      </div>
      <Footer />
    </div>
  );
}

