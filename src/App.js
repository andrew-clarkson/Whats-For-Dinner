import { useState } from 'react';
import Form from './Components/Form';
import Suggestions from './Components/Suggestions';
import AddedIngredients from './Components/AddedIngredients';
import Recipes from './Components/Recipes';
import './App.css';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipes, setRecipes] = useState();

  const addIngredient = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      return;
    } else {
      setSelectedIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
  };

  const deleteIngredient = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      let newIngredients = selectedIngredients.filter(
        (item) => item !== ingredient
      );
      setSelectedIngredients(newIngredients);
    }
  };

  const reset = () => {
    setSelectedIngredients([]);
  };

  const search = () => {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      process.env.REACT_APP_API
    }&ingredients=${selectedIngredients.toString()}&ranking=2&ignorePantry=true&number=12`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  return (
    <div className='container text-center'>
      <h1 className='mt-5'>What's For Dinner?</h1>
      <div className='border border-2 border-white rounded-3 m-4 p-5'>
        <Form addIngredient={addIngredient} />
        <Suggestions addIngredient={addIngredient} />
        <AddedIngredients
          ingredients={selectedIngredients}
          delete={deleteIngredient}
        />
        {selectedIngredients.length > 0 ? (
          <>
            <button
              className='btn btn-secondary btn-sm rounded-pill m-1'
              onClick={reset}
            >
              reset
            </button>
            <p className='mt-2'>click individual ingredients to delete</p>
          </>
        ) : (
          ''
        )}
        <div className='mt-4'>
          <button
            className='btn btn-lg btn-success rounded-pill m-1'
            onClick={search}
          >
            LET'S COOK!
          </button>
        </div>
      </div>

      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
