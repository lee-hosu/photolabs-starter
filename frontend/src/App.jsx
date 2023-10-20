import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';

import './App.scss';



// const photos = new Array(3).fill(sampleDataForPhotoListItem); //Create an array with a length of 3

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopicList />
      <PhotoList/>
    </div>
  );
};

export default App;
