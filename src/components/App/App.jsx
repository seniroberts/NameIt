import React from "react";
import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./App.css";
import { Header } from "./Header/Header";
import { HEADER_TITLE } from "../Constants";
import { ResultsContainer } from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

function App() {
	const [headerExpanded, setHeaderExpanded] = useState(true);
	const [suggestedNames, setSuggestedNames] = useState([]);

	const handleInputChange = (inputText) => {
		setHeaderExpanded(!inputText);
		setSuggestedNames(inputText ? name(inputText) : []);
	};

	return (
		<div>
			<Header headerTitle={HEADER_TITLE} headerExpanded={headerExpanded} />
			<SearchBar onInputChange={handleInputChange} />
			<ResultsContainer suggestedNames={suggestedNames} />
		</div>
	);
}

export default App;
