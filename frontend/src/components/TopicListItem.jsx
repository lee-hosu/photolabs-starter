import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, getPhotosByTopicId}) => {
  const { id, title } = topic;
  return (
    <div className="topic-list__item">
      <span className="topic-list__item span" onClick={()=> getPhotosByTopicId(id)} >{title}</span>
    </div>
  );
};

export default TopicListItem;
