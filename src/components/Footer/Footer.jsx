import React from 'react';
import './Footer.css'
import { Link } from 'react-scroll';
import { ReactComponent as CircleArrowUp } from '../../img/circle-arrow-up-solid.svg';


const Footer = () => {
  const enderecoDoPortifolio = 'https://tthiagocarlosdev.com.br/';

  return (
    <footer className="footer displayFlexCenterCenter">
      <div className="containerFooterWidth displayFlexCenterCenter pageWidth">
        <p className="footerText displayFlexCenterCenter">Desenvolvido por <a href={enderecoDoPortifolio} target='_blanck'> tthiagocarlosdev</a> </p>
        <Link className='footerArrow displayFlexCenterCenter' to="sectionHeader" spy={true} smooth={true} offset={0} duration={1000} activeClass="active"> <CircleArrowUp className="fa-circle-arrow-up" /> </Link>
      </div>
    </footer>
  );
}
 
export default Footer;
