import React from "react";

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndDownloadsSystems from '../ListOfImagesAndSystems/ListOfImagesAndDownloadsSystems.jsx';
import WebsiteCards from '../WebsiteCards/WebsiteCards';

const DownloadLinksSection = () => {
    return ( 
        <section id="downloadsSection" className="linksSections downloadLinksSection pageWidth displayFlexCenterCenter">
            <SectionSubtitle sectionSubtitle='Sistemas para Download' />

            <div className="projectCardContainer displayFlexCenterCenter">
                {ListOfImagesAndDownloadsSystems.length > 0 ? (
                    ListOfImagesAndDownloadsSystems.map((projeto, index) => (
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
 
export default DownloadLinksSection;
