import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Card = ({ id, fullName, email, address, phone, editar }) => {
  const {actions, store} = useContext (Context)
  return (
    <div className="text-center mt-5 d-flex justify-content-center">
      <div className="card mb-3 p-1" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={rigoImage}
              className="img-fluid rounded-start"
              alt={fullName}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <div className=" d-flex justify-content-between">
                <h5 className="card-title">{fullName}</h5>
                <div>
                  <button className="btn btn-outline-success mx-2" data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick = {() => editar()}>
                    <i className="fa fa-pen"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>

              <p className="card-text">
                <i className="fa fa-envelope"></i> {email}
              </p>
              <p className="card-text">
                <i className="fa fa-map-pin"></i> {address}
              </p>
              <p className="card-text">
                {" "}
                <i className="fa fa-phone"></i> {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete Contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Do you want to delete the contact?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick = {() => actions.deleteContact(id)} className="btn btn-danger" data-bs-dismiss="modal">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
