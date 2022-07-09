import React from 'react';

 const MainGeneral = () => {
  return ( 
    <div className="general">
      <h1> Geral </h1>
      <nav>
        <ul className="buttons-general">
          <li className="button-general"> <a href="http://www.policiacivil.pe.gov.br/" target="_blank" > SITE PCPE </a></li>
          <li className="button-general"> <a href="https://pcpevirtual.policiacivil.pe.gov.br/pcp/open.do?action=open&sys=PCP" target="_blank" > PCPE VIRTUAL </a></li>
          <li className="button-general"> <a href="https://sei.pe.gov.br/sip/login.php?sigla_orgao_sistema=GOVPE&sigla_sistema=SEI" target="_blank" > SEI </a></li>
          <li className="button-general"> <a href="https://www.expresso.pe.gov.br/login.php?cd=1" target="_blank" >  EXPRESSO </a></li>
        </ul>
      </nav>
    </div>
   );
 }
  
 export default MainGeneral;