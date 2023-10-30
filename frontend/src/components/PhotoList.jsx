import React from "react";
import PhotoListItem from './PhotoListItem';
// import photos from '../mocks/photos';
import "../styles/PhotoList.scss";

const PhotoList = ({photos, favoritedPhotos, toggleFavorite, openModal }) => {

  return (
    <ul className="photo-list">
      {photos.map((data)=>(
        <li key={data.id}>
          <PhotoListItem
            key={data.id}
            isFavorite={favoritedPhotos.includes(data.id)}
            toggleFavorite={() => toggleFavorite(data.id)}
            openModal = {()=> openModal(data)}
            photo={data}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
