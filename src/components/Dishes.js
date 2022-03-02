import Dish from "./Dish";

export default function Dishes(props) {
  function renderDishes() {
    return props.dishes.map((dish) => (
      <Dish key={dish.id} dish={dish} removeDish={props.removeDish} />
    ));
  }

  return (
    <div className="dishes">
      <h1 className="dishes-header">Your Dishes</h1>
      {renderDishes()}
    </div>
  );
}
