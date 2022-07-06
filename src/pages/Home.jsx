import React from 'react';

import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Home = () => {

  return ( 
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
   );
}
 
export default Home;