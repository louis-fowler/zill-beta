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

  const itemsLeft = () => {
    let itemLeftArray = props.list.filter(key => key.check === false);
    // console.log(itemLeftArray.length);
    return itemLeftArray.length === 0
      ? "No items left! well done."
      : itemLeftArray.length === 1
      ? "You have " + itemLeftArray.length + " item left to collect"
      : "You have " + itemLeftArray.length + " items left to collect";
  };

  return (
    <div>
      <h2>Click to check/un-check</h2>
      {grocArray.length !== 0 ? (
        <div>
          <h3>Grocery and Baking Isle</h3>
          <ItemCard
            array={grocArray}
            toggleCheck={props.toggleCheck}
            onClick={itemsLeft}
          />
        </div>
      ) : null}
      {oneArray.length !== 0 ? (
        <div>
          <h3>Isle 1</h3>
          <ItemCard array={oneArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {twoArray.length !== 0 ? (
        <div>
          <h3>Isle 2</h3>
          <ItemCard array={twoArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {threeArray.length !== 0 ? (
        <div>
          <h3>Isle 3</h3>
          <ItemCard array={threeArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {fourArray.length !== 0 ? (
        <div>
          <h3>Isle 4</h3>
          <ItemCard array={fourArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {fiveArray.length !== 0 ? (
        <div>
          <h3>Isle 5</h3>
          <ItemCard array={fiveArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {sixArray.length !== 0 ? (
        <div>
          <h3>Isle 6</h3>
          <ItemCard array={sixArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {sevenArray.length !== 0 ? (
        <div>
          <h3>Isle 7</h3>
          <ItemCard array={sevenArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}{" "}
      {eightArray.length !== 0 ? (
        <div>
          <h3>Isle 8</h3>
          <ItemCard array={eightArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      <div>
        <h3>{itemsLeft()}</h3>
      </div>
      <button className="sortButton" onClick={props.click}>
        Add or delete
      </button>
    </div>
  );
};

export default SortedPage;
