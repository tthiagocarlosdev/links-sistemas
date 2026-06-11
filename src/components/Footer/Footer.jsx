import React from 'react';
import './Footer.css'
import { ReactComponent as CircleArrowUp } from '../../img/circle-arrow-up-solid.svg';


const Footer = () => {
  const enderecoDoPortifolio = 'https://tthiagocarlosdev.com.br/';

  return (
    <footer className="footer displayFlexCenterCenter">
      <div className="containerFooterWidth displayFlexCenterCenter pageWidth">
        <p className="footerText displayFlexCenterCenter">Desenvolvido por <a href={enderecoDoPortifolio} target='_blanck'> tthiagocarlosdev</a> </p>
        <a className="footerArrow displayFlexCenterCenter" href="#sectionHeader"> <CircleArrowUp className="fa-circle-arrow-up" /> </a>
      </div>
    </footer>
  );
}
 
export default Footer;
