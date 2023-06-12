import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainOthers = () => {
  const navigate = useNavigate()

  const hadleGoDtiPage = () => {
    navigate("/dti")
  }

  return ( 
    <div className="box-others">
      <h1 className="title-others"> Outros </h1>
        <ul className="links-others">
        <button onClick={hadleGoDtiPage} className="button" > DTI </button>
          <li> <a href="https://www.sare.pe.gov.br/contracheque/" target="_blank"> CONTRA-CHEQUE </a></li>
          <li> <a href="https://www.sadspm.pe.gov.br/web" target="_blank"> SPM </a></li>
          <li> <a href="https://www.ilovepdf.com/pt" target="_blank"> PDF's </a></li>
          <li> <a href="https://www.bb.com.br/pbb/pagina-inicial/setor-publico/judiciario/deposito-judicial#/" target="_blank"> DEPÓSITOS JUDICIAIS </a></li>
          <li> <a href="https://tthiagocarlosdev.github.io/geradordesenha/" target="_blank"> GERADOR DE SENHA </a></li>
        </ul>
    </div>
   );
}
 
export default MainOthers;