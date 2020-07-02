import React from 'react'
import ItemCard from './ItemCard/ItemCard'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import { Link } from 'react-router-dom'

const SortedPage = props => {
  const createArrays = () => {
   let sortedArrays = []
    for (let i = 0; i <=8; i++) {
      const listGroup = props.list.filter(list => list.isle === i)
      sortedArrays.push(listGroup)
    } 
    return sortedArrays
  }
   
  // const listArrays = [
  //   props.list.filter(i => i.isle === 0),
  //   props.list.filter(i => i.isle === 1),
  //   props.list.filter(i => i.isle === 2),
  //   props.list.filter(i => i.isle === 3),
  //   props.list.filter(i => i.isle === 4),
  //   props.list.filter(i => i.isle === 5),
  //   props.list.filter(i => i.isle === 6),
  //   props.list.filter(i => i.isle === 7),
  //   props.list.filter(i => i.isle === 8)
  // ]
  
  // console.log('listArrays :',listArrays)
  
  // let grocArray = props.list.filter(i => i.isle === 0)
  // let oneArray = props.list.filter(i => i.isle === 1)
  // let twoArray = props.list.filter(i => i.isle === 2)
  // let threeArray = props.list.filter(i => i.isle === 3)
  // let fourArray = props.list.filter(i => i.isle === 4)
  // let fiveArray = props.list.filter(i => i.isle === 5)
  // let sixArray = props.list.filter(i => i.isle === 6)
  // let sevenArray = props.list.filter(i => i.isle === 7)
  // let eightArray = props.list.filter(i => i.isle === 8)

  const itemsLeft = () => {
    let itemLeftArray = props.list.filter(obj => obj.check === false)
    return itemLeftArray.length === 0
      ? 'No items left! well done.'
      : itemLeftArray.length === 1
      ? 'You have ' + itemLeftArray.length + ' item left to collect'
      : 'You have ' + itemLeftArray.length + ' items left to collect'
  }

  return (
    <div className="sortedWrapper">
      <h2>Click to check/un-check</h2>
      {createArrays().map((array, i) => (
        array.length !== 0 && (
          <div key={i} className="sCardContainer">
            <h3>{i === 0 ? "Grocery and Baking Isle" : `Isle: ${i}`}</h3>
          <ItemCard array={array} toggleCheck={props.toggleCheck} />
        </div>)
      ))}
      {/* {grocArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Grocery and Baking Isle</h3>
          <ItemCard array={grocArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {oneArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 1</h3>
          <ItemCard array={oneArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {twoArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 2</h3>
          <ItemCard array={twoArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {threeArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 3</h3>
          <ItemCard array={threeArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {fourArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 4</h3>
          <ItemCard array={fourArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {fiveArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 5</h3>
          <ItemCard array={fiveArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {sixArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 6</h3>
          <ItemCard array={sixArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}
      {sevenArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 7</h3>
          <ItemCard array={sevenArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null}{' '}
      {eightArray.length !== 0 ? (
        <div className="sCardContainer">
          <h3>Isle 8</h3>
          <ItemCard array={eightArray} toggleCheck={props.toggleCheck} />
        </div>
      ) : null} */}
      <div>
        <h3>{itemsLeft()}</h3>
      </div>
      <Link onClick={props.scroll} className="sortButton" to="/home">
        Add or delete
      </Link>
      <ScrollToTop />
    </div>
  )
}

export default SortedPage
