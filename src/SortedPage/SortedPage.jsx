import React from "react";

const SortedPage = (props) => {
  return (
    <div>
      {props.list.map((list) => (
        <div className="sortedItemContainer">
          <h3>Check it off!</h3>
          <input type="checkbox" name="" id="check-sorted" />
          <div className="sortedCard" key={list.id}>
            <div className={!("style" in list) ? "sCardText" : list.style}>
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
