import React from "react";

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndDtiSystems from '../ListOfImagesAndSystems/ListOfImagesAndDtiSystems.jsx';
import WebsiteCards from '../WebsiteCards/WebsiteCards';

const DtiLinksSection = () => {
    return ( 
        <section id="dtiSection" className="linksSections dtiLinksSection pageWidth displayFlexCenterCenter">
            <SectionSubtitle sectionSubtitle='Sistemas DTI' />

            <div className="projectCardContainer displayFlexCenterCenter">
                {ListOfImagesAndDtiSystems.length > 0 ? (
                    ListOfImagesAndDtiSystems.map((projeto, index) => (
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
 
export default DtiLinksSection;