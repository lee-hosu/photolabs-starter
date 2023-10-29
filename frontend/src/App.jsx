import React, {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

const App = () => {
  // Modal Functionality
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const openModal = (photo)=>{
    setIsModalOpen(true);
    setSelectedPhoto(photo);
  };

  const closeModal = ()=>{
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  // Favorite Functionality
  const toggleFav = (photoId)=>{
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };
 

  return (
    <>
      <HomeRoute
        openModal = {openModal}
        favoritedPhotos = {favoritedPhotos}
        toggleFav = {toggleFav}
      />
      {isModalOpen && <PhotoDetailsModal
        closeModal={closeModal}
        selectedPhoto = {selectedPhoto}
        favoritedPhotos = {favoritedPhotos}
        toggleFav = {toggleFav}
      />}
    </>
   
  );
};

export default App;
