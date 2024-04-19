import React from 'react';
import GeneralLinksSection from '../GeneralLinksSection/GeneralLinksSection';
import MainOthers from '../MainOthers';
import MainQueries from '../MainQueries';

const Main = () => {
  return ( 
    <div className="main displayFlexCenterCenter">
      <GeneralLinksSection/>
      <MainQueries/>
      <MainOthers/>
    </div>
   );
}
 
export default Main;