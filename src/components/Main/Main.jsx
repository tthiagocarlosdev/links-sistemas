import React from 'react';
import GeneralLinksSection from '../GeneralLinksSection/GeneralLinksSection';
import QueriesLinksSection from '../QueriesLinksSection/QueriesLinksSection';

import MainOthers from '../MainOthers';


const Main = () => {
  return ( 
    <div className="main displayFlexCenterCenter">
      <GeneralLinksSection/>
      <QueriesLinksSection/>
      <MainOthers/>
    </div>
   );
}
 
export default Main;