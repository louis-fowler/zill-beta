import React from 'react'
import { Link } from 'react-router-dom'

const TopBanner = props => {
  return (
    <div className="TopBanner">
      <Link to="/">
        <h1>Zill Shopper</h1>
      </Link>
      <h3>Helping you to shop quicker</h3>
    </div>
  )
}

export default TopBanner
