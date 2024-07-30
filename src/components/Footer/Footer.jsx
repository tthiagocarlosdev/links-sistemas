import React from 'react';
import './Footer.css'

const Footer = () => {
  const enderecoDoPortifolio = 'https://tthiagocarlosdev.com.br/';

  return (
    <footer className="footer displayFlexCenterCenter">
      <div className="containerFooterWidth displayFlexCenterCenter pageWidth">
        <p className="footerText displayFlexCenterCenter">Desenvolvido por <a href={enderecoDoPortifolio} target='_blanck'> tthiagocarlosdev</a> </p>
        <a className="footerArrow displayFlexCenterCenter" href="#sectionHeader"> <i className="fa-solid fa-circle-arrow-up"></i></a>
      </div>
    </footer>
  );
}
 
export default Footer;
