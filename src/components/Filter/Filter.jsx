import React from 'react';
import PropTypes from "prop-types";
import Style from "./Filter.module.css";

export default function Filter({ filter, onFilter }) {
  return (
    <form className={Style.form}>
      <label>
        <h3>Find contacts by name:</h3>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          className={Style.input}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};