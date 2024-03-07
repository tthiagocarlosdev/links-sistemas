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
            <li> <a className="button" href="https://www.siap.pe.gov.br/SIAP/public/pages/login.jsf" target="_blank" title="Sistema Integrado de Administração Prisional"> SIAP </a></li>
            <li> <a className="button" href="https://spba.pc.pe.gov.br/spba/#/controle" target="_blank" title="Sistema Pernambucano de Bens Apreendidos"> SPBA </a></li>
            <li> <a className="button" href="https://portalbnmp.cnj.jus.br/#/captcha/" target="_blank" title="Banco Nacional de Mandados de Prisão"> BNMP </a></li>
            <li> <a className="button" href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp" target="_blank"> RECEITA FEDERAL </a></li>
            <li> <a className="button" href="http://189.39.115.178:8082/" target="_blank"> AUTOVISION </a></li>
            <li> <a className="button" href="https://www.sds.pe.gov.br/sace/login" target="_blank" title="Gerência Geral de Análise Criminal e Estatística"> SACE </a></li>
          </ul>
      </div>
    </div>
   );
}
 
export default MainQueries;