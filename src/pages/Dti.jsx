import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../App.css';

const Dti = () => {
  return ( 
    <div className="container">
        <Header/>
        <div className="main">
        <h1 className="title-general"> DTI </h1>
        <ul className="links-general">
            <li> <a href="http://200.238.83.219/old-PCPE/rse.htm" target="_blank" > RELATÓRIO </a></li>
            <li> <a href="http://200.238.83.219/old-PCPE/JAVA/" target="_blank" > JAVA </a></li>
            <li> <a href="http://200.238.83.219/old-PCPE/AD/" target="_blank" > SEI </a></li>
        </ul>
        </div>
        <Footer/>
      </div>
   );
}
 
export default Dti;