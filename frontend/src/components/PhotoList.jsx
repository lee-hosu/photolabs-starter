import React, {useState} from "react";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import "../styles/PhotoList.scss";

const PhotoList = ({favoritedPhotos, toggleFavorite, openModal}) => {

  return (
    <ul className="photo-list">
      {photos.map((data)=>(
        <li key={data.id}>
          <PhotoListItem
            photoId = {data.id}
            key = {data.user.id}
            image = {data.urls.full}
            profileImage = {data.user.profile}
            username = {data.user.name}
            city = {data.location.city}
            country = {data.location.country}
            isFavorite={favoritedPhotos.includes(data.id)}
            toggleFavorite={() => toggleFavorite(data.id)}
            openModal = {()=> openModal(data)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
