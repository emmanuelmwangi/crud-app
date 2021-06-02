import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <input
        placeholder="Name"
        name="name"
        className="name-input inp"
        autoComplete="false"
      />
      <input
        placeholder="Email"
        name="email"
        className="email-input inp"
        autoComplete="false"
      />
      <button onSubmit={handleOnSubmit} className="btn add">
        Add
      </button>
      <hr />
    </form>
  );
};
