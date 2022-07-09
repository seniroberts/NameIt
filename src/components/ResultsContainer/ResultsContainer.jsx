import React from "react";
import "./ResultsContainer.css";
import { NameCard } from "../NameCard/NameCard";

export const ResultsContainer = (props) => {
	const { suggestedNames } = props;

	const suggestions = suggestedNames.map((name) => {
		return <NameCard key={name} name={name} />;
	});

	return <div className="results-container">{suggestions}</div>;
};
