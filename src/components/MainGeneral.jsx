import React from 'react';

 const MainGeneral = () => {

  return ( 
    <div className="boxGeneral">
      <div className="boxTitle">
        <h1 className="subTitles"> Geral </h1>
      </div>
      <div className="boxLinks">
        <ul className="links">
          <li> <a className="button" href="http://www.policiacivil.pe.gov.br/" target="_blank" > SITE PCPE </a></li>
          <li> <a className="button" href="https://pcpevirtual.policiacivil.pe.gov.br/pcp/open.do?action=open&sys=PCP" target="_blank" > PCPE VIRTUAL </a></li>
          <li> <a className="button" href="https://spp.pc.pe.gov.br/#/controle" target="_blank" > SPP </a></li>
          <li> <a className="button" href="https://sei.pe.gov.br/sip/login.php?sigla_orgao_sistema=GOVPE&sigla_sistema=SEI" target="_blank" > SEI </a></li>
          <li> <a className="button" href="https://pje.tjpe.jus.br/1g/login.seam" target="_blank" > PJE </a></li>
          <li> <a className="button" href="https://www.expresso.pe.gov.br/login.php?cd=1" target="_blank" >  EXPRESSO </a></li>
          <li> <a className="button" href="https://drive.expresso.pe.gov.br/login" target="_blank" >  DRIVE PE </a></li>
        </ul>
      </div>
    </div>
   );
 }
  
 export default MainGeneral;