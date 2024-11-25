import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const editar = async (e) => {
    e.preventDefault();
    let data = {
      name: fullName,
      phone: phone,
      email: email,
      address: address,
    };
    await actions.editContact(data, id);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => editar(e)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
