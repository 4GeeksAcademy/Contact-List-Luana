import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate ()
  
  https://playground.4geeks.com/contact/agendas/Luana/contacts/26

  return (
    <div className="container">
      <h1>Create Contact</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
		value = {email} onChange = {(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Full name
          </label>
          <input
		  value = {fullName} onChange = {(e) => setFullName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

		<div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
		  value = {address} onChange = {(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

		<div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
		  value = {phone} onChange = {(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="button" onClick = {(e) => agregar (e)}className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
};
