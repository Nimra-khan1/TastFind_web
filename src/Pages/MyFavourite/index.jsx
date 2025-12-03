import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const MyFavourite = () => {
  const [savedFavouriteData, setSavedFavouriteData] = useState(
    JSON.parse(localStorage.getItem("favouriteRecipies") || "[]")
  );

  return (
    <>
      <h2
  className="browse-title"
  style={{
    marginTop: "20px", // Adjust this value to move the heading
    textAlign: "center", // Center the heading (optional)
    fontSize: "32px", // Adjust font size (optional)
    
  }}
>
  FAVOURITE RECIPES
</h2>
      <div className="recipe-list">
        {savedFavouriteData.length > 0 ? (
          savedFavouriteData.map((recipe, index) => (
            <div key={index} className="recipe-item position-relative">
              <MdDeleteForever
                size={32}
                className="position-absolute top-0 left-0 rounded-pill text-danger bg-white p-1"
                onClick={() => {
                  window.alert(
                    `The recipie ${recipe.name} has been removed from favourite`
                  );
                  const updatedFavRecipies = savedFavouriteData.filter(
                    (item) => item.name !== recipe.name
                  );
                  setSavedFavouriteData(updatedFavRecipies);
                  localStorage.setItem(
                    "favouriteRecipies",
                    JSON.stringify(updatedFavRecipies)
                  );
                }}
              />
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
              <h4 className="recipe-name">{recipe.name}</h4>
            </div>
          ))
        ) : (
          <p className="text-center">No favourite recipes saved yet!</p>
        )}
      </div>
    </>
  );
};

export default MyFavourite;
