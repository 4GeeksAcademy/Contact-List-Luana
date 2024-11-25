import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";
import Edit from "../component/edit";

export const Home = () => {
  const { actions, store } = useContext(Context);
  const [edit, setEdit] = useState({
    showModal: false,
    id: undefined,
  });
  return (
    <div className="text-center mt-5">
      <h1>Contact List</h1>
      {store.contacts.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          fullName={item.name}
          email={item.email}
          address={item.address}
          phone={item.phone}
          editar={() => setEdit({ showModal: true, id: item.id })}
        />
      ))}
      <Edit
        id={edit.id}
        show={edit.showModal}
        onClose={() => setEdit({ showModal: false, id: undefined })}
      />
    </div>
  );
};
