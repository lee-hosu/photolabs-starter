import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const PhotoFavButton = ({fav, switchFav}) => {
  
  return (
    <div className="photo-list__fav-icon" onClick={switchFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected = {fav}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;