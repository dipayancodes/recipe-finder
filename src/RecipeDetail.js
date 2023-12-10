// RecipeDetail.js
import React from 'react';
import './RecipeDetail.css'; // Import the CSS file

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <div>Select a recipe to see details</div>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      {/* Add more details as needed */}
    </div>
  );
};

export default RecipeDetail;
