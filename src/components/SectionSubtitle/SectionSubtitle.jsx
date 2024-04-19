import React from "react";
import './SectionSubtitle.css'

const SectionSubtitle = ( { sectionSubtitle } ) => {
    return ( 
        <div className="sectionSubtitle displayFlexCenterCenter">
            <h2 className="subtitle">{sectionSubtitle}</h2>
        </div>
     );
}

export default SectionSubtitle;