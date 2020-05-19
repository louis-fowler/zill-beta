import React from "react";

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
              ? "grocery/baking"
              : list.isle}
          </p>
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
    </div>
  );
};

export default ItemSorter;
