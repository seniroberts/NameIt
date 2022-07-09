import React from "react";
import "./SearchBar.css";

export const SearchBar = (props) => {
	const { onInputChange } = props;
	return (
		<div className="search-container">
			<input
				className="search-input"
				placeholder="Type Keywords"
				onChange={(event) => onInputChange(event.target.value)}
			/>
		</div>
	);
};
