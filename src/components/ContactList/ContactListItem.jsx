import React from "react";
import PropTypes from "prop-types";
import Style from "./ContactListItem.module.css";

export default function ContactListItem({ id, name, number, onDeleteContact }) {
return (
      <li id={id} className={Style.contact}>
        <p className={Style.name}>{name}</p>
        <p className={Style.number}>{number}</p>
        <button
          className={Style.button}
          onClick={() => onDeleteContact(id)}
        >
          delete
        </button>
      </li>
    );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};