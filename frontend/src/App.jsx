import React, {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo)=>{
    setIsModalOpen(true);
    setSelectedPhoto(photo);
  };

  const closeModal = ()=>{
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <>
      <HomeRoute
        openModal = {openModal}
      />
      {isModalOpen && <PhotoDetailsModal
        closeModal={closeModal}
        selectedPhoto = {selectedPhoto}
      />}
    </>
   
  );
};

export default App;
