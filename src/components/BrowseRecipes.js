import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import "./BrowseRecipes.css"; // Ensure this file exists in the same directory

const BrowseRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Sample recipes data with ingredients and step images
  const recipes = [
    {
      name: "SPAGHETTI CARBONARA",
      image:
        "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
      ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Black pepper"],
      preparationSteps: [
        { step: "Boil spaghetti until al dente." },
        { step: "In a bowl, mix eggs, cheese, and pepper." },
        { step: "Drain pasta and mix with the egg mixture." },
        { step: "Serve immediately with extra cheese." },
      ],
    },
    {
      name: "CHICKEN ALFERADO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGSOoGFcsf7iSbWps5hf_d19iGP55T9nHog&s",
      ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan cheese"],
      preparationSteps: [
        { step: "Cook fettuccine according to package instructions." },
        { step: "In a skillet, cook chicken until golden brown." },
        { step: "Add cream and cheese to the skillet." },
        { step: "Combine pasta and sauce, and serve." },
      ],
    },
    {
      name: "BEEF TACOS",
      image:
        "https://joyfoodsunshine.com/wp-content/uploads/2022/04/mexian-ground-beef-tacos-recipe-9.jpg",
      ingredients: [
        "Ground beef",
        "Taco shells",
        "Toppings",
        "Salsa",
        "Guacamole",
      ],
      preparationSteps: [
        { step: "Cook ground beef with taco seasoning." },
        { step: "Warm taco shells in the oven." },
        { step: "Fill shells with beef and toppings." },
        { step: "Serve with salsa and guacamole." },
      ],
    },
    {
      name: "VEGETABLE STIR FRY",
      image:
        "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D",
      ingredients: ["Bell peppers", "Broccoli", "Soy sauce", "Rice"],
      preparationSteps: [
        { step: "Chop vegetables like bell peppers and broccoli." },
        { step: "Heat oil in a pan and stir-fry vegetables." },
        { step: "Add soy sauce and serve over rice." },
      ],
    },
    {
      name: "LEMON TART",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2023_51/2043794/matt-adlard-lemon-tart-1x1-zz-231220.jpg",
      ingredients: ["Tart crust", "Eggs", "Sugar", "Lemon juice"],
      preparationSteps: [
        { step: "Preheat the oven and prepare tart crust." },
        { step: "Mix eggs, sugar, lemon juice, and zest." },
        { step: "Pour filling into the crust and bake." },
        { step: "Cool before serving with whipped cream." },
      ],
    },
    {
      name: "PANCAKES",
      image:
        "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg",
      ingredients: [
        "Flour",
        "Sugar",
        "Baking powder",
        "Milk",
        "Eggs",
        "Butter",
      ],
      preparationSteps: [
        { step: "In a bowl, mix flour, sugar, baking powder, and salt." },
        { step: "In another bowl, whisk eggs, milk, and melted butter." },
        { step: "Combine wet and dry ingredients until just mixed." },
        {
          step: "Pour batter onto a heated skillet and cook until bubbles form.",
        },
        { step: "Flip and cook until golden brown." },
      ],
    },
    {
      name: "CAPRESE SALAD",
      image:
        "https://whatsgabycooking.com/wp-content/uploads/2023/06/Dinner-Party-__-Traditional-Caprese-1.jpg",
      ingredients: [
        "Fresh mozzarella",
        "Tomatoes",
        "Basil",
        "Olive oil",
        "Balsamic vinegar",
      ],
      preparationSteps: [
        { step: "Slice fresh mozzarella and tomatoes." },
        { step: "Layer mozzarella, tomato slices, and basil leaves." },
        { step: "Drizzle with olive oil and balsamic vinegar." },
        { step: "Season with salt and pepper to taste." },
      ],
    },
    {
      name: "MUSHROOM RISTTO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4gkQUw7oWIXwDYw5kMM9BB8CZs8cj1e8-A&s",
      ingredients: [
        "Arborio rice",
        "Mushrooms",
        "Onions",
        "Garlic",
        "Parmesan cheese",
      ],
      preparationSteps: [
        { step: "Heat broth in a saucepan and keep warm." },
        { step: "In a large skillet, sauté onions and garlic in olive oil." },
        {
          step: "Add arborio rice and cook for 1-2 minutes until lightly toasted.",
        },
        {
          step: "Gradually add warm broth, stirring frequently until absorbed.",
        },
        {
          step: "Stir in mushrooms, parmesan cheese, and parsley before serving.",
        },
      ],
    },
  ];

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
    // Scroll to preparation steps smoothly
    const preparationSection = document.getElementById("preparation-steps");
    if (preparationSection) {
      preparationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="browse-recipes">
      <h2 className="browse-title">BROWSE RECIPES</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="recipe-item position-relative"
              onClick={() => handleImageClick(recipe)}
            >
              <FaHeart
                size={32}
                className="position-absolute top-0 left-0 rounded-pill text-danger bg-white p-1"
                onClick={() => {
                  if (localStorage.getItem("favouriteRecipies") === null) {
                    localStorage.setItem(
                      "favouriteRecipies",
                      JSON.stringify([])
                    );
                  }
                  const getFavRecipies = JSON.parse(
                    localStorage.getItem("favouriteRecipies")
                  );

                  if (
                    getFavRecipies.find((item) => item.name === recipe.name)
                  ) {
                    return window.alert(
                      `The recipie ${recipe.name} is already in favourite`
                    );
                  }
                  const updatedFavRecipies = [...getFavRecipies, recipe];
                  localStorage.setItem(
                    "favouriteRecipies",
                    JSON.stringify(updatedFavRecipies)
                  );

                  window.alert(
                    `The recipe ${recipe.name} has been added to favourite `
                  );
                }}
              />

              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
              <h6 className="recipe-name">{recipe.name}</h6>
            </div>
          ))
        ) : (
          <p className="no-recipes">No recipes found.</p>
        )}
      </div>

      {/* Recipe Details */}
      {selectedRecipe && (
        <div className="preparation-details" id="preparation-steps">
          <h4 className="preparation-title">
            PREPERATION STEP FOR {selectedRecipe.name}:
          </h4>

          <div className="details-content">
            <div className="preparation-steps">
              <h5 className="ingredients-title">INGREDIENTS:</h5>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient">
                    {ingredient}
                  </li>
                ))}
              </ul>

              <h5 className="steps-title">PREPERATION STEPS:</h5>
              <ul>
                {selectedRecipe.preparationSteps.map((stepObj, stepIndex) => (
                  <li key={stepIndex} className="preparation-step">
                    {stepIndex + 1}. {stepObj.step}
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="detail-image"
            />
          </div>

          <button
            onClick={() => setSelectedRecipe(null)}
            className="close-button"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseRecipes;
