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
      list: [{item: "apple", type: "fruit/veg", isle: 0}, {item: "vogels", type: "bread", isle: 10}, {item: "oranges", type: "fruit/veg", isle: 0}, {item: "toothpaste", type: "personal hygiene", isle: -1}, {item: "toilet paper", type: "personal hygiene", isle: -1}],
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

  AddItemHandler = (event) => {
    event.preventDefault();
    let list = this.state.list;
    let name = event.target.name;
    let value = event.target.value;

    list[name] = value;

    this.setState({list})
  }
  
  SortHandler = () => {
    this.setState(prevState => {
      const list = prevState.list.sort((a,b) =>
      (a.isle > b.isle) ? 1 : -1) 
      
      const showHelpText = prevState.list.map(a => a.isle).includes(-1) 

    // this.setState(prevState => ({
    //   list: prevState.list.map( a =>
    //     a.isle && a.isle !== "" ? {...a, isle: 'This item has no isle yet!'}: a
    //   )
    // }))

      return {
        list,
        showHelpText,
        sortPage: "sorted"
      };
    })
  }

	render() {
		return (
			<div className="App">
				<TopBanner/>
        <AddItemForm click={data => this.AddItemHandler(data)} list={this.state.list}/>
        {this.state.sortPage === "toSort" ? (
          <ItemSorter list={this.state.list} click={this.SortHandler}/>
        ) : (
          <SortedPage list={this.state.list} click={this.ChangePage}/>
        )}
        {this.state.list.map(a =>
          a.isle && a.isle >= 0 ? a.isle : 'This item has no isle yet!'
          )}

          {this.state.showHelpText && (
            <HelpUsForm/>
          )}

			</div> 
		);
	}
}

export default App;
