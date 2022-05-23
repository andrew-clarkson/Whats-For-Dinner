const RecipeCard = (props) => {
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
      <div className='card border-0 text-start bg-transparent col-xs-12 col-sm-6 col-md-4 '>
        <img
          alt={props.recipe.title}
          className='card-img-top'
          src={`https://spoonacular.com/recipeImages/${props.recipe.id}-636x393.jpg`}
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.recipe.title}</h5>

          {props.recipe.missedIngredients && (
            <>
              <h6>Missing Ingredients:</h6>
              <ul>
                {props.recipe.missedIngredients.map((ingredient, i) => (
                  <li key={i}>{ingredient.name}</li>
                ))}
              </ul>
            </>
          )}

          <button onClick={clickHandler} className='btn btn-light'>
            Get Recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
