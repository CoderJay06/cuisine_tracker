export default function MatchingDish(props) {
  return (
    <div className="matching-dish">
      <h2 className="matching-dish-header">{props.dish.name}</h2>
      <h2>{props.dish.ingredients}</h2>
    </div>
  );
}
