import React,{useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({openModal}) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const toggleFav = (photoId)=>{
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };
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
