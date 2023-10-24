import React from "react";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((data)=>(
        <li key={data.id}>
          <PhotoListItem
            key = {data.user.id}
            image = {data.urls.full}
            profileImage = {data.user.profile}
            username = {data.user.name}
            city = {data.location.city}
            country = {data.location.country}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
