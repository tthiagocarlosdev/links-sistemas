import React from 'react';

const MainQueries = () => {
  return ( 
    <div className="boxQueries">
      <div className="boxTitle">
        <h1 className="subTitles"> Consultas </h1>
      </div>
      <div className="boxLinks">
        <ul className="links">
            <li> <a className="button" href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf" target="_blank"> INFOSEG </a></li>
            <li> <a className="button" href="http://200.238.83.149/pernambuco/" target="_blank"> INFOPOL </a></li>
            <li> <a className="button" href="https://servicos.sds.pe.gov.br/portalsds/" target="_blank"> PORTAL WEB </a></li>
            <li> <a className="button" href="https://certidao.sds.pe.gov.br/#" target="_blank"> BOLETIM INTEGRADO </a></li>
            <li> <a className="button" href="https://policiaagil.sds.pe.gov.br" target="_blank"> POLÍCIA ÁGIL </a></li>
            <li> <a className="button" href="https://www.siap.pe.gov.br/SIAP/public/pages/login.jsf" target="_blank"> SIAP </a></li>
            <li> <a className="button" href="https://spba.pc.pe.gov.br/spba/#/controle" target="_blank"> SPBA </a></li>
            <li> <a className="button" href="https://portalbnmp.cnj.jus.br/#/captcha/" target="_blank"> BNMP </a></li>
            <li> <a className="button" href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp" target="_blank"> RECEITA FEDERAL </a></li>
          </ul>
      </div>
    </div>
   );
}
 
export default MainQueries;