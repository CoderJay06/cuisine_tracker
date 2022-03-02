import React, { useState, useRef } from "react";
import "./styles.css";
import Dishes from "./components/Dishes";
import nextId from "react-id-generator";

/*
  show a form with an input box for dish name
  form should have an add button to add new dish
  display list of dishes if any below the form
  each dish in list should have an X button next to it
  
  on click add will get the name value and add it to Dishes
  on click the X button will delete the dish from Dishes
*/
export default function App() {
  const [dishData, setDishData] = useState({ name: "" });
  const [dishes, setDishes] = useState([]);

  function handleDishData(event) {
    const { name, value } = event.target;
    setDishData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function addDish(e) {
    e.preventDefault();
    const dishId = nextId();
    setDishes((prevDishes) => [...prevDishes, { id: dishId, ...dishData }]);
    // clear form
    setDishData({ name: "" });
  }

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
        <button
          className="dish-form-btn"
          disabled={!dishData.name}
          onClick={addDish}
        >
          Add
        </button>
      </form>
      {dishes.length > 0 && <Dishes dishes={dishes} removeDish={removeDish} />}
    </div>
  );
}
