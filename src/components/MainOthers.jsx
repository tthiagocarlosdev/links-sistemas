import React from 'react';

import { useNavigate } from 'react-router-dom';

const MainOthers = () => {

  const navigate = useNavigate()
  
  const hadleGoDtiPage = () => {
    navigate("/dti")
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return ( 
    <div className="boxOthers">
      <div className="boxTitle">
        <h1 className="subTitles"> Outros </h1>
      </div>
      <div className="boxLinks">
        <ul className="links">
            <button onClick={hadleGoDtiPage} className="button" > DTI </button>
            <li> <a className="button" href="https://videoconferencia.pe.gov.br/b/" target="_blank"> VÍDEO CONFERÊNCIA </a></li>
            <li> <a className="button" href="https://www.sare.pe.gov.br/contracheque/" target="_blank"> CONTRA-CHEQUE </a></li>
            <li> <a className="button" href="http://web.transparencia.pe.gov.br/despesas/desp-diarias/" target="_blank"> DIÁRIAS </a></li>
            <li> <a className="button" href="https://diarias.pc.pe.gov.br/#/controle" target="_blank"> SCD </a></li>
            <li> <a className="button" href="https://www.sadspm.pe.gov.br/web" target="_blank"> SPM </a></li>
            <li> <a className="button" href="https://www.ilovepdf.com/pt" target="_blank"> PDF's </a></li>
            <li> <a className="button" href="https://www.bb.com.br/pbb/pagina-inicial/setor-publico/judiciario/deposito-judicial#/" target="_blank"> DEPÓSITOS JUDICIAIS </a></li>
            <li> <a className="button" href="https://tthiagocarlosdev.github.io/geradordesenha/" target="_blank"> GERADOR DE SENHA </a></li>
          </ul>
      </div>
    </div>
   );
}
 
export default MainOthers;