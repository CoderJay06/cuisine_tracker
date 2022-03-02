import React, { useState, useRef } from "react";
import "./styles.css";

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

  console.log(dishData);
  console.log(dishes);
  function handleDishData(event) {
    const { name, value } = event.target;
    setDishData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function addDish(e) {
    e.preventDefault();
    setDishes((prevDishes) => ({
      ...prevDishes,
      dishData
    }));
    // clear form
    setDishData({ name: "" });
  }

  return (
    <div className="App">
      <h1>Cruisine Tracker</h1>
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
    </div>
  );
}
