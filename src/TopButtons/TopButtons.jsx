import React from "react";

// push to branch test

const TopButtons = props => {
	return (
		<div>
			<button onClick={props.list}>Show List</button>
			<button onClick={props.form}>Add Items</button>
		</div>
	);
};

export default TopButtons;
