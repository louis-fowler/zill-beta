import React from 'react'
import { Link } from 'react-router-dom'

import ScrollToTop from '../ScrollToTop/ScrollToTop'

const ItemSorter = props => {
  return (
    <div className="sorterWrapper">
      {props.list.map(list => (
        <div key={list.id} className="sorterItem">
          <p>
            Item: {list.item} - Isle:{' '}
            {list.isle === -1
              ? 'This item has no isle yet!'
              : list.isle === 0
              ? 'Grocery / Baking'
              : list.isle}
          </p>
          {list.check ? (
            <div className="checkMarkContainer">
              <img
                src={process.env.PUBLIC_URL + 'images/check.svg'}
                alt="Check mark"
              />
            </div>
          ) : null}
          <button
            className="removeButton"
            onClick={() => props.delete(list.id)}>
            {' '}
            remove
          </button>
        </div>
      ))}
      <Link onClick={props.scroll} className="sortButton" to="/sorted">
        Click to sort
      </Link>
      <ScrollToTop className="sortButton" />
    </div>
  )
}

export default ItemSorter
