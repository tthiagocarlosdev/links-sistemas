import React from 'react';

const MainQueries = () => {
  return ( 
    <div className="box-queries">
      <h1 className="title-queries"> Consultas </h1>
        <ul className="links-queries">
          <li> <a href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf" target="_blank"> INFOSEG </a></li>
          <li> <a href="http://200.238.83.149/pernambuco/" target="_blank"> INFOPOL </a></li>
          <li> <a href="https://certidao.sds.pe.gov.br/#" target="_blank"> BOLETIM INTEGRADO </a></li>
          <li> <a href="https://policiaagil.sds.pe.gov.br" target="_blank"> POLÍCIA ÁGIL </a></li>
          <li> <a href="https://www.siap.pe.gov.br/SIAP/public/pages/login.jsf" target="_blank"> SIAP </a></li>
          <li> <a href="https://portalbnmp.cnj.jus.br/#/captcha/" target="_blank"> BNMP </a></li>
          <li> <a href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp" target="_blank"> RECEITA FEDERAL </a></li>
          {/* <li> <a href="https://pje.tjpe.jus.br/1g/login.seam" target="_blank"> PJE </a></li> */}
        </ul>
    </div>
   );
}
 
export default MainQueries;