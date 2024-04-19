import React from 'react';
import './GeneralLinksSection.css'

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndSystems from '../ListOfImagesAndSystems/ListOfImagesAndSystems';
import WebsiteCards from '../WebsiteCards/WebsiteCards';



 const GeneralLinksSection = () => {

  return ( 
    <section id="generalSection" className="generalLinksSection pageWidth displayFlexCenterCenter">
      <SectionSubtitle sectionSubtitle='Sistemas Gerais' />

      <div className="containerDeCardsDosProjetos displayFlexCenterCenter">
          {ListOfImagesAndSystems.length > 0 ? (
              ListOfImagesAndSystems.map((projeto, index) => (
                  <WebsiteCards
                      key={index}
                      image={projeto.image}
                      imageTitle={projeto.imageTitle}
                      systemName={projeto.systemName}
                      systemAddress={projeto.systemAddress}
                  />
              ))
          ) : (
              <p className="noCardAvailable displayFlexCenterCenter">Nenhum card disponível no momento.</p>
          )}
      </div>

    </section>

   );
 }
  
 export default GeneralLinksSection;