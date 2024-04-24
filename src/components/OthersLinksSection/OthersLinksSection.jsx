import React from "react";

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndOthersSystems from '../ListOfImagesAndSystems/ListOfImagesAndOthersSystems.jsx';
import WebsiteCards from '../WebsiteCards/WebsiteCards';

const OthersLinksSection = () => {
    return ( 
        <section id="otherSection" className="linksSections othersLinksSection pageWidth displayFlexCenterCenter">
        <SectionSubtitle sectionSubtitle='Outros Sistemas' />

        <div className="projectCardContainer displayFlexCenterCenter">
            {ListOfImagesAndOthersSystems.length > 0 ? (
                ListOfImagesAndOthersSystems.map((projeto, index) => (
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
 
export default OthersLinksSection;