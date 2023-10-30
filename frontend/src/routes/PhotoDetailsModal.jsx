import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({closeModal, selectedPhoto, favoritedPhotos, toggleFav}) => {
  const { location, urls, user } = selectedPhoto;
  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Display photo */}
      <div className="photo-details-modal__images">
        <img src={urls.regular} className="photo-details-modal__image" />
        {/* Display user Profile */}
        <div className="photo-details-modal__header">
          <img className="photo-details-modal__photographer-profile" src={user.profile} alt="" />
          <div className="photo-details-modal__photographer-info">
            <span>{user.username}</span>
            <br/>
            <span className="photo-details-modal__photographer-location">{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
      {/* Similar photos */}
      <div className="photo-details-modal__images">
        {selectedPhoto.similar_photos &&
          <PhotoList
            photos={Object.values(selectedPhoto.similar_photos)}
            favoritedPhotos={favoritedPhotos}
            toggleFavorite={toggleFav}
            openModal={() => {}}
          />
        }
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
