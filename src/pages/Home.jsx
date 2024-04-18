import React from 'react';

import '../App.css';

import Header from '../components/Header/Header';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Home = () => {

  return ( 
      <div className="container">
        <Header/>
        <NavigationBar />
        <Main/>
        <Footer/>
      </div>
   );
}
 
export default Home;