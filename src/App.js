// App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import { searchRecipes } from './apiService';
// import RecipeDetail from './RecipeDetail';


const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
