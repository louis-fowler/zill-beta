import React from "react";

// Just seeing hoe it looks

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
