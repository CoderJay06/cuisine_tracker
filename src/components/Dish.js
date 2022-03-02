export default function Dish(props) {
  return (
    <div className="dish">
      <h2 className="dish-header">{props.dish.name}</h2>
      <button
        className="dish-remove-btn"
        onClick={() => props.removeDish(props.dish.id)}
      >
        X
      </button>
    </div>
  );
}
