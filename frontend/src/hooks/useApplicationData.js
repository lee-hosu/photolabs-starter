import { useState } from 'react';

const useApplicationData = () => {
  // State declarations
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Functions to manage Modal state
  const onPhotoSelect = (photo) => {
    setIsModalOpen(true);
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  // Functions to manage Favorites state
  const updateToFavPhotoIds = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      favoritedPhotos,
    },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
