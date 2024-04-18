import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header/Header';
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
              <li> <a className="button" href="https://tthiagocarlosdev.github.io/projects_website/projetos/relatorio_de_servicos_externos/index.html" target="_blank" > RELATÓRIO </a></li>
              <li> <a className="button" href="https://tthiagocarlosdev.github.io/projects_website/projetos/teste_de_impressora/index.html" target="_blank" > TESTE DE IMPRESSORA </a></li>
              <li> <a className="button" href="https://glpi.pc.pe.gov.br/" target="_blank" > GLPI </a></li>
              <li> <a className="button" href="https://spp-treinamento.pc.pe.gov.br/#/controle" target="_blank" > SPP TREINAMENTO </a></li>
              <li> <a className="button" href="http://200.238.83.219/old-PCPE/JAVA/" target="_blank" > JAVA </a></li>
              <li> <a className="button" href="http://200.238.83.219/old-PCPE/AD/" target="_blank" > ANYDESK </a></li>
              <li> <a className="button" href="https://www.naps2.com/download" target="_blank" > NAPS2 </a></li>
              <li> <a className="button" href="http://187.33.66.90:8082/" target="_blank" > AUTOVISION </a></li>
              <li> <a className="button" href="https://scp.pc.pe.gov.br/scp/#/controle" target="_blank" > SCP </a></li>
              <li> <a className="button" href="https://app.powerbi.com/view?r=eyJrIjoiN2Y2ODBkYTktMWQ1Zi00YzA0LWExYzUtMjdhMDE4ODNhODE3IiwidCI6Ijk3ZjU2ODZlLTBlM2QtNDAzNS04MjZkLTMwM2EzMmI3Mjk0MiJ9" target="_blank" title="Acompanhamento do Vencimento dos Certificados Digitais!" > CERTIFICADOS DIGITAIS </a></li>
            </ul>
          </div>
          
        </div>
        <Footer/>
      </div>
   );
}
 
export default Dti;