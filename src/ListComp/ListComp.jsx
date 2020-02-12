import React from "react";

const ListInput = props => {
	return (
		<div>
			<form onSubmit={props.onChange}>
				<input type="text" />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default ListInput;
