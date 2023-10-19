import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';

import './App.scss';



// const photos = new Array(3).fill(sampleDataForPhotoListItem); //Create an array with a length of 3

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {photos.map((photoData)=>(
        <PhotoListItem
          key={photoData.id}
          city = {photoData.location.city}
          country = {photoData.location.country}
          image = {photoData.imageSource}
          username = {photoData.username}
          profileImage = {photoData.profile}
        />
      ))} */}
      <PhotoList/>
    </div>
  );
};

export default App;
