import React from 'react';
import GeneralLinksSection from '../GeneralLinksSection/GeneralLinksSection';
import QueriesLinksSection from '../QueriesLinksSection/QueriesLinksSection';
import OthersLinksSection from '../OthersLinksSection/OthersLinksSection';
import DtiLinksSection from '../DtiLinksSection/DtiLinksSection';


const Main = () => {
  return ( 
    <div className="main displayFlexCenterCenter">
      <GeneralLinksSection/>
      <QueriesLinksSection/>
      <OthersLinksSection />
      <DtiLinksSection />
    </div>
   );
}
 
export default Main;