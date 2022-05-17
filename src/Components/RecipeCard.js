// import { useState } from 'react';
// import RecipeModal from './RecipeModal';
const RecipeCard = (props) => {
  // const [singleRecipeData, setSingleRecipeData] = useState();

  const UrlHandler = (data) => {
    const recipeUrl = data.sourceUrl;
    window.open(
      recipeUrl,
      '_blank' //
    );
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const url = `https://api.spoonacular.com/recipes/${props.recipe.id}/information/?apiKey=${process.env.REACT_APP_API}&includeNutrition=false`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => UrlHandler(data));
  };

  return (
    <>
      {/* {singleRecipeData && <RecipeModal recipe={singleRecipeData} />} */}
      <div className='card border-0 text-start bg-transparent col-xs-12 col-sm-6 col-md-4 '>
        <img
          alt={props.recipe.title}
          className='card-img-top'
          src={`https://spoonacular.com/recipeImages/${props.recipe.id}-636x393.jpg`}
        />
        <div className='card-body'>
          <h4 className='card-title'>{props.recipe.title}</h4>
          <h6>Missing Ingredients:</h6>
          <ul>
            {props.recipe.missedIngredients.map((ingredient, i) => (
              <li key={i}>{ingredient.name}</li>
            ))}
          </ul>
          <button onClick={clickHandler} className='btn btn-light'>
            Get Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
