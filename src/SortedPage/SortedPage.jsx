import React from 'react';

const SortedPage = (props) => {
  return (
    <div>
      {props.list.map((list, index)=>
        <div key={index}>
          <h2>Isle: {list.isle}</h2><h2>Item: {list.item}</h2> <hr/>
        </div>
      )}
      <button onClick={props.click}>Add more!</button>
    </div>
  );
}

export default SortedPage;
