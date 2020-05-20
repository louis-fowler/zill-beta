import React from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import checkMark from "../images/checkmark.png";

const ItemSorter = props => {
  return (
    <div className="sorterWrapper">
      {props.list.map(list => (
        <div className="sorterItem">
          <p key={list.id}>
            Item: {list.item} - Isle:{" "}
            {list.isle === -1
              ? "This item has no isle yet!"
              : list.isle === 0
              ? "Grocery / Baking"
              : list.isle}
          </p>
          {list.check === true ? (
            <div className="checkMarkContainer">
              <img src={checkMark} alt="Check mark" />
            </div>
          ) : null}
          <button
            className="removeButton"
            onClick={() => props.delete(list.id)}>
            {" "}
            remove
          </button>
        </div>
      ))}
      <button className="sortButton" onClick={props.click}>
        Click to sort
      </button>
      <ScrollToTop />
    </div>
  );
};

export default ItemSorter;
