// apiService.js
import axios from 'axios';

const API_KEY = '98d700d0dcf34edd954951286fe0d44e'; // Replace with your actual API key
const BASE_URL = 'https://api.spoonacular.com';

const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
      params: {
        query,
        number: 10, // Adjust the number of results as needed
        apiKey: API_KEY
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes", error);
    return [];
  }
};

export { searchRecipes };
