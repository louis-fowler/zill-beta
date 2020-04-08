import React from 'react';

const ItemSorter = (props) => {

  return (
      <div className="sorterWrapper">
        {props.list.map((list, index)=>
          <div className="sorterItem">
            <p className="sorterText" key={index}>
              Item: {list.item} - Isle: {list.isle === -1 ? 'This item has no isle yet!' : list.isle === 0 ? "grocery/baking" : list.isle}
            </p>
            <button className="removeButton" onClick={() => props.delete(index)}> remove</button>
            <hr/>
          </div>

        )}
          <button className="sortButton" onClick={props.click}>Click to sort</button>
      </div>
  );
};

export default ItemSorter;
