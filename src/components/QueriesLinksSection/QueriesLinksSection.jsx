import React from 'react';
import './QueriesLinksSection.css'

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndQuerySystems from '../ListOfImagesAndSystems/ListOfImagesAndQuerySystems';
import WebsiteCards from '../WebsiteCards/WebsiteCards';


const QueriesLinksSection = () => {
  return ( 
    <section id="queriesSection" className="queriesLinksSection pageWidth displayFlexCenterCenter">
      <SectionSubtitle sectionSubtitle='Sistemas de Consultas' />

      <div className="projectCardContainer displayFlexCenterCenter">
          {ListOfImagesAndQuerySystems.length > 0 ? (
              ListOfImagesAndQuerySystems.map((projeto, index) => (
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
 
export default QueriesLinksSection;