import React from "react";

function ItemCard(props) {
  return (
    <div>
      {props.array.map(list => {
        return (
          <div className="sortedCard" key={list.id}>
            <div
              onClick={() => props.toggleCheck(list.check, list.id)}
              className={list.check === false ? "sCardText" : "sCardTextCheck"}>
              <p>
                Isle:{" "}
                {list.isle === -1
                  ? "This item has no isle yet!"
                  : list.isle === 0
                  ? "grocery / baking"
                  : list.isle}
              </p>
              <p>Item: {list.item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
