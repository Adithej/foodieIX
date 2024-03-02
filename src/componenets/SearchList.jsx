/* eslint-disable react/prop-types */
const SearchList = ({ data }) => {
  let common = data.common;
  let branded = data.branded;
  console.log("branded- ", branded);

  const renderedCommon = common.map((item) => {
    const compositeKey = `${item.tag_id}-${item.food_name}`;
    return <div key={compositeKey}>{item.food_name}</div>;
  });

  const renderedBranded = branded.map((item) => {
    return <div key={item.nix_item_id}>{item.food_name}</div>;
  });

  return (
    <div>
      <h1>Common</h1>
      {renderedCommon}
      <h1>branded</h1>
      {renderedBranded}
    </div>
  );
};

export default SearchList;
