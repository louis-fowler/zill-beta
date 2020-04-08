import React from "react";
import "./App.css";
import TopBanner from "./TopBanner/TopBanner";
import ItemSorter from "./ItemSorter/ItemSorter";
import HelpUsForm from "./HelpUsForm/HelpUsForm";
import SortedPage from "./SortedPage/SortedPage"
import AddItemForm from "./AddItemForm/AddItemForm"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      sortPage: "toSort",
      list: [{item: "apple", type: "fruit/veg", isle: 0}, {item: "vogels", type: "bread", isle: 10}, {item: "oranges", type: "fruit/veg", isle: 0}, {item: "toothpaste", type: "personal hygiene", isle: 3}, {item: "toilet paper", type: "personal hygiene", isle: 6}],
		};
  }
  

  ChangePage = () => { 
    if (this.state.sortPage === "toSort") {
      this.setState({
        sortPage: "sorted"
      })
    } else {
      this.setState({
        sortPage: "toSort"
      })
    }
  }

  getItemHandler = (childData) => {
    this.setState(prevState => ({
      list: [childData, ...prevState.list]
    }))
  }

  
  SortHandler = () => {
    this.setState(prevState => {
      const list = prevState.list.sort((a,b) =>
      (a.isle > b.isle) ? 1 : -1) 
      
      const showHelpText = prevState.list.map(a => a.isle).includes(-1) 

      return {
        list,
        showHelpText,
        sortPage: "sorted"
      };
    })
  }

  deleteItemHandler = i => {
    this.setState({
      list: [...this.state.list.slice(0, i),
      ...this.state.list.slice(i + 1)]
    })
  }

	render() {
		return (
			<div className="App">
				<TopBanner/>
        {this.state.sortPage === "toSort" ? (
          <div>
            <AddItemForm getItemHandler={this.getItemHandler} list={this.state.list}/>
            <ItemSorter list={this.state.list} click={this.SortHandler} delete={this.deleteItemHandler}/>
          </div>
        ) : (
          <SortedPage list={this.state.list} click={this.ChangePage}/>
        )}
        {this.state.showHelpText && (
          <HelpUsForm/>
        )}
			</div> 
		);
	}
}

export default App;
