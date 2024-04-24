import React from 'react';

import '../App.css';

import Header from '../components/Header/Header';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';


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