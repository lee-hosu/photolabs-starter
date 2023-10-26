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
  return (
    <>
      <HomeRoute
        openModal = {openModal}
      />
      {isModalOpen && <PhotoDetailsModal/>}
    </>
   
  );
};

export default App;
