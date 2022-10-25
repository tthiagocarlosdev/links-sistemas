import React from 'react';
import { useNavigate } from 'react-router-dom';

 const MainGeneral = () => {
  const navigate = useNavigate()
  
  const hadleGoDtiPage = () => {
    navigate("/dti")
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return ( 
    <div className="box-general">
      <h1 className="title-general"> Geral </h1>
      <ul className="links-general">
        <li> <a href="http://www.policiacivil.pe.gov.br/" target="_blank" > SITE PCPE </a></li>
        <li> <a href="https://pcpevirtual.policiacivil.pe.gov.br/pcp/open.do?action=open&sys=PCP" target="_blank" > PCPE VIRTUAL </a></li>
        <li> <a href="https://sei.pe.gov.br/sip/login.php?sigla_orgao_sistema=GOVPE&sigla_sistema=SEI" target="_blank" > SEI </a></li>
        <li> <a href="https://www.expresso.pe.gov.br/login.php?cd=1" target="_blank" >  EXPRESSO </a></li>
        <li> <a href="https://drive.expresso.pe.gov.br/login" target="_blank" >  DRIVE PE </a></li>
        <button onClick={hadleGoDtiPage} className="button" > DTI </button>
      </ul>
      
    </div>
   );
 }
  
 export default MainGeneral;