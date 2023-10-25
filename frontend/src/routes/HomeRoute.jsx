import React,{useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList
        favoritedPhotos = {favoritedPhotos}
        toggleFavorite = {(photoId)=>{
          if (favoritedPhotos.includes(photoId)) {
            setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
          } else {
            setFavoritedPhotos([...favoritedPhotos, photoId]);
          }
        }}
      />
    </div>
  );
};

export default HomeRoute;
