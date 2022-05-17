import RecipeCard from './RecipeCard';

const Recipes = (props) => {
  if (props.recipes) {
    return (
      <>
        <div className='row'>
          {props.recipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </>
    );
  }
};

export default Recipes;
