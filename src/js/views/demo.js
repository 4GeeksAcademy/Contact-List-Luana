import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("") // value = {fullName} onChange = {(e) => setFullName(e.target.value)}
	/*
	let data = {
		name: fullName, ...
	}
		*/
	return (
		<div className="container">
			<h1>Create Contact</h1>
		</div>
	);
};
