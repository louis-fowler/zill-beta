import React from "react";
import "./App.css";
import TopBanner from "./TopBanner/TopBanner";
import ItemSorter from "./ItemSorter/ItemSorter";
import HelpUsForm from "./HelpUsForm/HelpUsForm";
import SortedPage from "./SortedPage/SortedPage";
import AddItemForm from "./AddItemForm/AddItemForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortPage: "toSort",
      list: [
        { item: "apple", type: "fruit/veg", isle: 0, id: 123, check: true },
        { item: "vogels", type: "bread", isle: 10, id: 32135, check: false },
        {
          item: "oranges",
          type: "fruit/veg",
          isle: 0,
          id: 97472,
          check: false,
        },
        {
          item: "toothpaste",
          type: "personal hygiene",
          isle: 3,
          id: 578926,
          check: false,
        },
        {
          item: "toilet paper",
          type: "personal hygiene",
          isle: 6,
          id: 847,
          check: false,
        },
      ],
    };
  }

  ChangePage = () => {
    if (this.state.sortPage === "toSort") {
      this.setState({
        sortPage: "sorted",
      });
    } else {
      this.setState({
        sortPage: "toSort",
      });
    }
  };

  getItemHandler = childData => {
    childData.item === ""
      ? alert("No item in input")
      : this.setState(prevState => ({
          list: [childData, ...prevState.list],
        }));
  };

  SortHandler = () => {
    this.setState(prevState => {
      const list = prevState.list.sort((a, b) => (a.isle > b.isle ? 1 : -1));

      const showHelpText = prevState.list.map(a => a.isle).includes(-1);

      return {
        list,
        showHelpText,
        sortPage: "sorted",
      };
    });
  };

  toggleCheck = (itemCheck, index) => {
    let newArray = [...this.state.list];
    itemCheck === true
      ? (newArray[index] = { ...newArray[index], check: false })
      : (newArray[index] = { ...newArray[index], check: true });

    this.setState({
      list: newArray,
    });
  };

  deleteItemHandler = itemId => {
    const list = this.state.list.filter(i => i.id !== itemId);
    this.setState({ list: list });
  };

  // checkItemHandler = (itemId) => {
  //   const item = this.state.list.filter((i) => i.id === itemId);
  //   const spreadItem = [...item];
  // };

  render() {
    return (
      <div className="App">
        <TopBanner />
        {this.state.sortPage === "toSort" ? (
          <div onClick={this.testGet}>
            <AddItemForm
              getItemHandler={this.getItemHandler}
              list={this.state.list}
            />
            <ItemSorter
              list={this.state.list}
              click={this.SortHandler}
              delete={this.deleteItemHandler}
            />
          </div>
        ) : (
          <SortedPage
            list={this.state.list}
            click={this.ChangePage}
            toggleCheck={this.toggleCheck}
          />
        )}
        {this.state.showHelpText && <HelpUsForm />}
      </div>
    );
  }
}

export default App;
