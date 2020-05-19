import React from "react";
import ItemCard from "./ItemCard/ItemCard";

const SortedPage = props => {
  let grocArray = props.list.filter(i => i.isle === 0);
  let oneArray = props.list.filter(i => i.isle === 1);
  let twoArray = props.list.filter(i => i.isle === 2);
  let threeArray = props.list.filter(i => i.isle === 3);
  let fourArray = props.list.filter(i => i.isle === 4);
  let fiveArray = props.list.filter(i => i.isle === 5);
  let sixArray = props.list.filter(i => i.isle === 6);
  let sevenArray = props.list.filter(i => i.isle === 7);
  let eightArray = props.list.filter(i => i.isle === 8);
  let nineArray = props.list.filter(i => i.isle === 9);
  let tenArray = props.list.filter(i => i.isle === 10);

  return (
    <div>
      <h2>Click to check/un-check</h2>

      {grocArray !== undefined || grocArray.length !== 0 ? (
        <div>
          <h3>Grocery and Baking Isle</h3>
          <ItemCard array={grocArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : oneArray !== undefined || grocArray.length !== 0 ? (
        <div>
          <h3>Isle 1</h3>
          <ItemCard array={oneArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}

      <button className="sortButton" onClick={props.click}>
        Add or delete
      </button>
    </div>
  );
};

export default SortedPage;
