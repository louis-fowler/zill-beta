import React from 'react'
import { Route } from 'react-router-dom'

import '../../index.css'

import SignIn from '../SignInPage/SignInPage'
import TopBanner from '../TopBanner/TopBanner'
import ItemSorter from '../ItemSorter/ItemSorter'
import HelpUsForm from '../HelpUsForm/HelpUsForm'
import SortedPage from '../SortedPage/SortedPage'
import AddItemForm from '../AddItemForm/AddItemForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null,
      sortPage: 'toSort',
      list: [
        { item: 'apple', type: 'fruit/veg', isle: 0, id: 123, check: true },
        { item: 'vogels', type: 'bread', isle: 8, id: 32135, check: false },
        {
          item: 'oranges',
          type: 'fruit/veg',
          isle: 0,
          id: 97472,
          check: false,
        },
        {
          item: 'toothpaste',
          type: 'personal hygiene',
          isle: 3,
          id: 578926,
          check: false,
        },
        {
          item: 'toilet paper',
          type: 'personal hygiene',
          isle: 6,
          id: 847,
          check: false,
        },
      ],
    }
  }

  snagId = (id) => {
    this.setState({
      userId: id
    })
  }

  ChangePage = () => {
    if (this.state.sortPage === 'toSort') {
      this.setState({
        sortPage: 'sorted',
      })
      window.scrollTo({
        top: 6000,
      })
    } else {
      this.setState({
        sortPage: 'toSort',
      })
      window.scrollTo({
        top: 0,
      })
    }
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  getItemHandler = childData => {
    childData.item === '' || childData.type === ''
      ? alert('Please add item and/or select item type')
      : this.setState(prevState => ({
          list: [childData, ...prevState.list],
        }))
  }

  // Now defunct
  SortHandler = () => {
    window.scrollTo({
      top: 0,
    })
    this.setState(prevState => {
      const list = prevState.list.sort((a, b) => (a.isle > b.isle ? 1 : -1))

      const showHelpText = prevState.list.map(a => a.isle).includes(-1)

      return {
        list,
        showHelpText,
        sortPage: 'sorted',
      }
    })
  }

  toggleCheck = (itemCheck, itemId) => {
    let itemIndex = this.state.list.findIndex(key => key.id === itemId)
    let newArray = [...this.state.list]
    itemCheck === true
      ? (newArray[itemIndex] = { ...newArray[itemIndex], check: false })
      : (newArray[itemIndex] = { ...newArray[itemIndex], check: true })

    this.setState({
      list: newArray,
    })
  }

  deleteItemHandler = itemId => {
    const list = this.state.list.filter(i => i.id !== itemId)
    this.setState({ list: list })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<SignIn snagId={this.snagId}/>)} />
        <Route path="/home" component={TopBanner} />
        <Route
          exact
          path="/home"
          render={() => {
            return (
              <div>
                <AddItemForm
                  getItemHandler={this.getItemHandler}
                  list={this.state.list}
                />
                <ItemSorter
                  list={this.state.list}
                  click={this.SortHandler}
                  delete={this.deleteItemHandler}
                  scroll={this.scrollToTop}
                />
              </div>
            )
          }}
        />
        <Route
          path="/sorted"
          render={() => {
            return (
              <SortedPage
                list={this.state.list}
                toggleCheck={this.toggleCheck}
                scroll={this.scrollToTop}
              />
            )
          }}
        />
        {this.state.showHelpText && <HelpUsForm />}
      </div>
    )
  }
}

export default App
