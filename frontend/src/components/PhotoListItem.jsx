import React from 'react';
import PhotoFavButton from './PhotoFavButton';


import "../styles/PhotoListItem.scss";

const PhotoListItem = ({isFavorite, toggleFavorite, openModal, photo}) => {

  const { id, location, urls, user } = photo;

  const handleFavoriteClick = () => {
    toggleFavorite();
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        fav={isFavorite}
        switchFav={handleFavoriteClick}
      />
      
      <img className="photo-list__image" src={urls.regular} alt={`Photo ${id}`} onClick={openModal}/>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="" />
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <br/>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
