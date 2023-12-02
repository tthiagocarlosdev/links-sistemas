import React from 'react';

import '../App.css'

const Header = ({ showGoBackButton, onGoBack }) => {
  return ( 
    <div className="header">
      {<h1> LINKS PCPE </h1>}
      {showGoBackButton && (
        <button onClick={onGoBack} className="button buttonGoback">VOLTAR</button>
      )}
    </div>
   );
}
 
export default Header;