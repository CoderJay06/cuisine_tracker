import MatchingDish from "./MatchingDish";

export default function MatchingDishes(props) {
  console.log("MatchingDishes ", props);
  function renderMatchingDishes() {
    const matchingDishes = props.dishes
      .filter((dish) => {
        const dishIngredients = dish.ingredients.join(" ");
        console.log("dI ", dishIngredients);
        return !props.userIngredients.some((data) =>
          data.ingredients.includes(dishIngredients)
        );
      })
      .map((matchingDish) => (
        <MatchingDish key={matchingDish.id} dish={matchingDish} />
      ));
    return matchingDishes;
  }
  return (
    <div className="matching-dishes">
      <h2 className="matching-dishes-header">Matching Dishes</h2>
      {renderMatchingDishes()}
    </div>
  );
}
