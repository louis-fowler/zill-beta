import React from "react";
import "./App.css";
import ListInput from "./ListComp/ListComp";
import TopButtons from "./TopButtons/TopButtons";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageView: "list",
			item: ["hello ", "world "],
		};
	}

	changeToForm = () => {
		this.setState({
			pageView: "form",
		});
	};

	changeToList = () => {
		this.setState({
			pageView: "list",
		});
	};

	itemAddHandler = event => {
		this.setState({
			item: [...this.state.item, event.target.value],
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Amazing Shopping List</h1>
				<p>{this.state.item}</p>
				<div>
					<TopButtons list={this.changeToList} form={this.changeToForm} />
				</div>
				{this.state.pageView === "list" ? (
					<div>
						{this.state.item.map(item => (
							<p>{item}</p>
						))}
					</div>
				) : (
					<ListInput onChange={this.itemAddHandler.bind(this)} />
				)}
			</div>
		);
	}
}

export default App;
