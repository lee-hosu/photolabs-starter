import React,{useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({openModal, favoritedPhotos, toggleFav}) => {
 
  const checkFavPhotosExist = favoritedPhotos.length >= 1;
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist = {checkFavPhotosExist}/>
      <PhotoList
        favoritedPhotos = {favoritedPhotos}
        toggleFavorite = {toggleFav}
        openModal={openModal}
      />
      
    </div>
  );
};

export default HomeRoute;
