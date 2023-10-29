import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();
 

  return (
    <>
      <HomeRoute
        openModal = {onPhotoSelect}
        favoritedPhotos = {state.favoritedPhotos}
        toggleFav = {updateToFavPhotoIds}
      />
      {state.isModalOpen && <PhotoDetailsModal
        closeModal={onClosePhotoDetailsModal}
        selectedPhoto={state.selectedPhoto}
        favoritedPhotos={state.favoritedPhotos}
        toggleFav={updateToFavPhotoIds}
      />}
    </>
  );
};

export default App;
