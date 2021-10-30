import React from "react";
import RecipeCard from "./ui/RecipeCard";

const Feed = ({ items, quantity }) => {
  const feedList = [];

  for (let i = 0; i < quantity; i++) {
    feedList.push(
      <RecipeCard key={i} title={items[i].title} imgSrc={items[i].image} />
    );
  }

  return (
    <div role="list" style={feedStyle}>
      {feedList}
    </div>
  );
};

const feedStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "20px",
};

export default Feed;
