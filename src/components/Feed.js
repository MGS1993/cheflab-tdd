import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./ui/RecipeCard";

const Feed = ({ items, quantity }) => {
  const feedList = [];

  for (let i = 0; i < quantity; i++) {
    feedList.push(
      <Link key={i} to={`recipeView/${items[i].id}`}>
        <RecipeCard title={items[i].title} imgSrc={items[i].image} />
      </Link>
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
