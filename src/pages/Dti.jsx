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
        <div className="box-dti">
          <h1 className="title-dti"> DTI </h1>
          <ul className="links-dti">
            <li> <a href="https://tthiagocarlosdev.github.io/projects_website/relatorio_de_servicos_externos/index.html" target="_blank" > RELATÓRIO </a></li>
            <li> <a href="https://glpi.pc.pe.gov.br/" target="_blank" > GLPI </a></li>
            <li> <a href="https://spp-treinamento.pc.pe.gov.br/#/controle" target="_blank" > SPP TREINAMENTO </a></li>
            <li> <a href="http://200.238.83.219/old-PCPE/JAVA/" target="_blank" > JAVA </a></li>
            <li> <a href="http://200.238.83.219/old-PCPE/AD/" target="_blank" > ANYDESK </a></li>
          </ul>
        </div>
        <Footer/>
      </div>
   );
}
 
export default Dti;