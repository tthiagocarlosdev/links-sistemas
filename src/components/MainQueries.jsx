import React from 'react';

const MainQueries = () => {
  return ( 
    <div className="queries">
      <h1> Consultas </h1>
      <div className="buttons-queries">
        <nav>
          <ul className="buttons">
            <li className="link-buttons"> <a href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf" target="_blank"> INFOSEG </a></li>
            <li className="link-buttons"> <a href="http://200.238.83.149/pernambuco/" target="_blank"> INFOPOL </a></li>
            <li className="link-buttons"> <a href="https://policiaagil.sds.pe.gov.br/paginainicial" target="_blank"> POLÍCIA ÁGIL </a></li>
            <li className="link-buttons"> <a href="https://www.siap.pe.gov.br/SIAP/public/pages/login.jsf" target="_blank"> SIAP </a></li>
            <li className="link-buttons"> <a href="https://portalbnmp.cnj.jus.br/#/captcha/" target="_blank"> BNMP </a></li>
            <li className="link-buttons"> <a href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp" target="_blank"> RECEITA FEDERAL </a></li>
          </ul>
        </nav>
      </div>
      
    </div>
   );
}
 
export default MainQueries;