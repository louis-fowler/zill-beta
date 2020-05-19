import React from "react";

const SortedPage = props => {
  return (
    <div>
      {props.list.map((list, index) => (
        <div className="sortedItemContainer">
          <div className="sortedCard" key={list.id}>
            <div
              onClick={() => props.toggleCheck(list.check, index)}
              className={list.check === false ? "sCardText" : "sCardTextCheck"}>
              <p>
                Isle:{" "}
                {list.isle === -1
                  ? "This item has no isle yet!"
                  : list.isle === 0
                  ? "grocery/baking"
                  : list.isle}
              </p>
              <p>Item: {list.item}</p>
            </div>
          </div>
        </div>
      ))}
      <button className="sortButton" onClick={props.click}>
        Add or delete
      </button>
    </div>
  );
};

export default SortedPage;
