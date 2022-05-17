import { useRef } from 'react';

const Form = (props) => {
  const ingredientInputRef = useRef();

  const submitHandler = (event) => {
    const addedIngredient = ingredientInputRef.current.value.toLowerCase();
    if (/^[A-Za-z\s]+$/.test(addedIngredient) && addedIngredient.length > 2) {
      props.addIngredient(addedIngredient);
      ingredientInputRef.current.value = '';
    } else {
      alert('Invalid Character'); //add better error notif
    }
    event.preventDefault();
  };

  return (
    <div className=''>
      <form className='border-0' onSubmit={submitHandler}>
        <div>
          <h3>Add Ingredients</h3>
        </div>
        <input className='border-0' ref={ingredientInputRef} />

        <button className='btn btn-light rounded-pill m-2' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
