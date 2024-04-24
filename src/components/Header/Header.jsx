import React from 'react';

import '../Header/Header.css'
import bandeiraPCPE from '../../img/bandeiraPCPE.png'
import bandeiraDePernambuco from '../../img/bandeiraPernambuco.png'

const Header = ({ showGoBackButton, onGoBack }) => {
  return ( 
    <header id='sectionHeader' className='sectionHeader displayFlexCenterCenter'>
        <div className='containerHeader displayFlexCenterCenter pageWidth'>
          <div className='containerTitleText displayFlexCenterCenter'>
            <h1 className='title'> LINKS PCPE </h1>
          </div>
          <div className='containerHeaderImages displayFlexCenterCenter'>
            {<img className='headerImages' src={bandeiraPCPE} alt="Bandeira da Polícia Civil de Pernambuco" title="Bandeira da Polícia Civil de Pernambuco"/>}
            {<img className='headerImages' src={bandeiraDePernambuco} alt="Bandeira da Polícia Civil de Pernambuco" title="Bandeira da Polícia Civil de Pernambuco"/>}
          </div>
        </div>  

        {showGoBackButton && (
            <button onClick={onGoBack} className="button buttonGoback">VOLTAR</button>
          )}    

    </header>
   );
}
 
export default Header;