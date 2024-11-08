import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Card = ({ id, fullName, email, address, phone }) => {
  return (
    <div className="text-center mt-5 d-flex justify-content-center">
      <div className="card mb-3 p-1" style={{ width: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={rigoImage} className="img-fluid rounded-start" alt={fullName} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{fullName}</h5>
              <p className="card-text">{email}</p>
              <p className="card-text">{address}</p>
              <p className="card-text">{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
