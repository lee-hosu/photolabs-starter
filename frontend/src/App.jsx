import React, {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = ()=>{
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = ()=>{
    setIsModalOpen(false);
  };
  return (
    <>
      <HomeRoute
        openModal = {openModal}
      />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal}/>}
    </>
   
  );
};

export default App;
