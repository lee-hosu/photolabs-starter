import React from "react";
import TopicListItem from './TopicListItem';
import topics from '../mocks/topics';
import "../styles/TopicList.scss";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {
        topics.map((data) => (
          <TopicListItem
            key={data.id} // Don't forget to add a key when mapping over an array
            title={data.title}
          />
        ))
      }
    </div>
  );
};

export default TopicList;
