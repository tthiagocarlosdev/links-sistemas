import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../App.css';

const Dti = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return ( 
    <div className="container">
        <Header showGoBackButton={true} onGoBack={handleGoBack} />
        <div className="boxDti">
          <div className="boxTitle">
            <h1 className="subTitles"> DTI </h1>
          </div>
          <div className="boxLinks">
            <ul className="links linksDti">
              <li> <a className="button" href="https://wa.me/5581994884114/" target="_blank" > PLANTÃO DTI </a></li>
              <li> <a className="button" href="https://tthiagocarlosdev.github.io/projects_website/relatorio_de_servicos_externos/index.html" target="_blank" > RELATÓRIO </a></li>
              <li> <a className="button" href="https://glpi.pc.pe.gov.br/" target="_blank" > GLPI </a></li>
              <li> <a className="button" href="https://spp-treinamento.pc.pe.gov.br/#/controle" target="_blank" > SPP TREINAMENTO </a></li>
              <li> <a className="button" href="http://200.238.83.219/old-PCPE/JAVA/" target="_blank" > JAVA </a></li>
              <li> <a className="button" href="http://200.238.83.219/old-PCPE/AD/" target="_blank" > ANYDESK </a></li>
              <li> <a className="button" href="http://187.33.66.90:8082/" target="_blank" > AUTOVISION </a></li>
            </ul>
          </div>
          
        </div>
        <Footer/>
      </div>
   );
}
 
export default Dti;