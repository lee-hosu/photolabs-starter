import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favoritedPhotos: [...state.favoritedPhotos, action.payload.id],
    };

  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favoritedPhotos: state.favoritedPhotos.filter(
        (id) => id !== action.payload.id
      ),
    };

  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photos: action.payload.photos,
    };

  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topics: action.payload.topics,
    };

  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      isModalOpen: true,
      selectedPhoto: action.payload.photo,
    };

  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {
      ...state,
      photoDetails: action.payload.details,
    };
  case ACTIONS.CLOSE_MODAL:
    return {
      ...state,
      selectedPhoto: null,
      isModalOpen: false,
    };

  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritedPhotos: [],
  photos: [],
  topics: [],
  photoDetails: null,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  const displayPhotoDetails = (details) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { details } });
  };

  // Fetch photo data
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(data => {
        setPhotoData(data);
      });
  }, []); // Empty dependency array ensures this runs once when component mounts.
  
  // Fetch topic data
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => {
        setTopicData(data);
      });
  }, []);
  
  // Fetch photos by topic ID
  const getPhotosByTopicId = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response)=> response.json())
      .then(data => {
        setPhotoData(data);
      })
      .catch((error)=> console.error(`Error fetching photos for topic ID ${topicId}:`, error));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoData,
    setTopicData,
    displayPhotoDetails,
    getPhotosByTopicId,
  };
};

export default useApplicationData;
