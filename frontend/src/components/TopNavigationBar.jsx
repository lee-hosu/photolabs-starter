import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({isFavPhotoExist, topics, getPhotosByTopicId}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        getPhotosByTopicId={getPhotosByTopicId}/>
      <FavBadge
        isFavPhotoExist = {isFavPhotoExist}/>
    </div>
  );
};

export default TopNavigation;