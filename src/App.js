import React, { useState } from "react";
import "./styles.css";
import Dishes from "./components/Dishes";
import nextId from "react-id-generator";
import MatchingDishes from "./components/MatchingDishes";

/*
 As a user I want to be able to add ingredients to the dish 

match up users ingredients with dishes that match ingredients

*/

export default function App() {
  const [dishData, setDishData] = useState({
    name: "",
    ingredients: ""
  });
  const [userData, setUserData] = useState({
    ingredients: ""
  });

  const [dishes, setDishes] = useState([]);
  const [userIngredients, setUserIngredients] = useState([]);

  console.log(dishData);

  function handleDishData(event) {
    const { name, value } = event.target;
    console.log(name, " ", value);

    setDishData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleUserIngredients(event) {
    const { name, value } = event.target;
    console.log(name, " ", value);
    const ingredientsArray = dishData.ingredients.split(" ");
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  console.log("userData ", userData);
  console.log("state: ", dishData);

  function addUserIngredients(e) {
    e.preventDefault();
    const ingredientsId = nextId();
    const ingredientsArray = userData.ingredients.split(" ");

    setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: ingredientsId, ingredients: ingredientsArray }
    ]);

    setUserData({ ingredients: "" });
  }

  console.log("userIngredients ", userIngredients);
  console.log(dishes);
  function addDish(e) {
    e.preventDefault();
    const dishId = nextId();
    const ingredientsArray = dishData.ingredients.split(" ");

    setDishes((prevDishes) => [
      ...prevDishes,
      { id: dishId, name: dishData.name, ingredients: ingredientsArray }
    ]);
    // clear form
    setDishData({ name: "", ingredients: "" });
  }

  console.log(dishes);

  function removeDish(dishId) {
    setDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== dishId));
  }

  return (
    <div className="App">
      <h1 className="main-header">Cruisine Tracker</h1>
      <form className="dish-form">
        <div className="dish-form-input">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onChange={handleDishData}
            value={dishData.name}
            placeholder="Add dish"
          />
        </div>
        <div className="dish-form-input">
          <label htmlFor="ingredients">Ingredients</label>
          <input
            name="ingredients"
            type="text"
            onChange={handleDishData}
            value={dishData.ingredients}
            placeholder="Add ingredients"
          />
        </div>
        <div className="dish-form-input">
          <label htmlFor="ingredients">Your Ingredients</label>
          <input
            name="ingredients"
            type="text"
            onChange={handleUserIngredients}
            value={userData.ingredients}
            placeholder="Add your ingredients"
          />
        </div>
        <button
          className="dish-form-btn"
          disabled={!userData.ingredients}
          onClick={addUserIngredients}
        >
          Add Your Ingredients
        </button>
        <button
          className="dish-form-btn"
          disabled={!dishData.name}
          onClick={addDish}
        >
          Add
        </button>
      </form>
      {userIngredients.length > 0 && (
        <MatchingDishes dishes={dishes} userIngredients={userIngredients} />
      )}
      <br />
      {dishes.length > 0 && <Dishes dishes={dishes} removeDish={removeDish} />}
    </div>
  );
}
