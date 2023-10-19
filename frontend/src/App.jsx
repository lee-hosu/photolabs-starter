import React from 'react';
import PhotoListItem from './components/PhotoListItem';

import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = new Array(3).fill(sampleDataForPhotoListItem); //Create an array with a length of 3

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos.map((photoData)=>(
        <PhotoListItem
          key={photoData.id}
          city = {photoData.location.city}
          country = {photoData.location.country}
          image = {photoData.imageSource}
          username = {photoData.username}
          profileImage = {photoData.profile}
        />
      ))}
    </div>
  );
};

export default App;
