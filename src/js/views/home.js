import React , {useContext}from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const {actions, store}=useContext(Context)
	return(
	<div className="text-center mt-5">
		<h1>Contact List</h1>
		{store.contacts.map((item)=> (
			<Card
			key = {item.id}
			id = {item.id}
			fullName = {item.name}
			email = {item.email}
			address = {item.address}
			phone = {item.phone} 
			/>
		))}
	</div>
	)
};
