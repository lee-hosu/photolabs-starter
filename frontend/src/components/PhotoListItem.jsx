import React from "react";
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({image, profileImage, username, city, country}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" src={image} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profileImage} alt="" />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <br/>
          <span className="photo-list__user-location">{city}, {country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
