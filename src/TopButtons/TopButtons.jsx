import React from "react";

// Testing for git push 

const TopButtons = props => {
	return (
		<div>
			<button onClick={props.list}>Show List</button>
			<button onClick={props.form}>Add Items</button>
		</div>
	);
};

export default TopButtons;
