import React from 'react';

import "./WebsiteCards.css"

const WebsiteCards = ({ image, systemName, systemAddress, imageTitle }) => {
  return (
    <div className="websiteCards displayFlexCenterCenter">
        <img className='cardImage' src={require(`../../img/${image}`)} alt="Imagem do site" title={imageTitle} />
        <a className='buttonGoToWebsite displayFlexCenterCenter' href={systemAddress} target="_blank" rel="noopener noreferrer">{systemName}</a>
    </div>
  );
};

export default WebsiteCards;