import React from "react";
import "./NameCard.css";
import { nameCheapURL } from "../Constants";

export const NameCard = (props) => {
	const { name } = props;
	return (
		<a
			target="_blank"
			rel="noreferrer"
			className="card-link"
			href={`${nameCheapURL}${name}`}
		>
			<div className="result-name-card">
				<p className="result-name">{name}</p>
			</div>
		</a>
	);
};
