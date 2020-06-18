import React from 'react'
import { Link } from 'react-router-dom'

import ScrollToTop from '../ScrollToTop/ScrollToTop'
import checkMark from '../images/checkmark.png'

const ItemSorter = props => {
  return (
    <div className="sorterWrapper">
      {props.list.map(list => (
        <div className="sorterItem">
          <p key={list.id}>
            Item: {list.item} - Isle:{' '}
            {list.isle === -1
              ? 'This item has no isle yet!'
              : list.isle === 0
              ? 'Grocery / Baking'
              : list.isle}
          </p>
          {list.check === true ? (
            <div className="checkMarkContainer">
              <img
                src={process.env.PUBLIC_URL + '/check.svg'}
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
