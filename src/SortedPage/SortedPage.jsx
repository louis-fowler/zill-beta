import React from 'react';

const SortedPage = (props) => {


  return (
    <div>
      {props.list.map((list, index)=>
        <div>
          <div className="sortedCard" key={index}>
            <input type="checkbox" name="" id="sortedCardChecked" className="checkmark"/>
            <div className="sCardText">
              <h2>Isle: {list.isle === -1 ? 'This item has no isle yet!' : list.isle === 0 ? "grocery/baking" : list.isle}</h2>
              <h2>Item: {list.item}</h2>
            </div>
          </div>
          <hr/>
        </div>
      )}
      <button className="sortButton" onClick={props.click}>Add or delete</button>
    </div>
  );
}

export default SortedPage;
