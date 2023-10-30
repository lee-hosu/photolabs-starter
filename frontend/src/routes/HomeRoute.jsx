import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({openModal, favoritedPhotos, toggleFav, photos, topics, getPhotosByTopicId}) => {
 
  const checkFavPhotosExist = favoritedPhotos.length >= 1;
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist = {checkFavPhotosExist}
        getPhotosByTopicId = {getPhotosByTopicId}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos = {favoritedPhotos}
        toggleFavorite = {toggleFav}
        openModal={openModal}
      />
      
    </div>
  );
};

export default HomeRoute;
