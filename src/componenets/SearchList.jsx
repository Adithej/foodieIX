/* eslint-disable react/prop-types */
import "./SearchList.css";
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
    <div className="search-results">
      <div className="option-btn">
        <button>All</button>
        <button>Common</button>
        <button>Branded</button>
      </div>
      <h4>Common</h4>
      <div className="result-list">{renderedCommon}</div>
      <h4>Branded</h4>
      <div className="result-list">{renderedBranded}</div>
    </div>
  );
};

export default SearchList;
