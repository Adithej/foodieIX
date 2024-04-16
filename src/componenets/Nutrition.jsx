/* eslint-disable react/prop-types */
const Nutrition = ({ nutrition }) => {
  // Check if nutrition data exists before accessing it
  if (!nutrition || !nutrition.foods || nutrition.foods.length === 0) {
    return <p>No nutrition data available.</p>;
  }

  // Access the first food item (assuming single item response)
  const food = nutrition.foods[0];

  // Access specific properties from the food object
  const calories = food.nf_calories;
  const sodium = food.nf_sodium;
  const protein = food.nf_protein;

  // You can access other properties similarly, using their names
  // (e.g., nf_total_carbohydrate, nf_total_fat, etc.)

  return (
    <div>
      <h2>Nutrition Facts (per can)</h2>
      {console.log("pic", food.photo.thumb)}
      <img src={food.photo.thumb} alt="pic" height="100px" />
      <ul>
        <li>Calories: {calories}</li>
        <li>Sodium: {sodium} mg</li>
        <li>Protein: {protein} g</li>
        {/* Add more list items for other desired properties */}
      </ul>
    </div>
  );
};

export default Nutrition;
