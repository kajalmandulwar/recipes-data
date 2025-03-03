import React from 'react';
import recipesData from "./data.js"; // Assuming this contains the recipe data
import Card from './Card.jsx';
import recipe from './data2.js';

const Fetch = ({ query }) => {
  return (
    <>
      {recipesData
        .filter((recipe) => 
          recipe.name.toLowerCase().includes(query.toLowerCase()) // Make sure both are lowercase for comparison
        )
        .map((recipe) => {
          return (
            <Card
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
              difficulty={recipe.difficulty}
              cuisine={recipe.cuisine}
            />
          );
        })}
    </>
  );
};

export default Fetch;
