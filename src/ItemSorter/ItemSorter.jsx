import React from 'react';

const ItemSorter = (props) => {
  return (
      <div>
        {props.list.map((list, index)=>
          <li key={index}>
            Item: {list.item} Isle: {list.isle}
          </li>
        )}
          <button onClick={props.click}>Click to sort!</button>
      </div>
  );
};

export default ItemSorter;
