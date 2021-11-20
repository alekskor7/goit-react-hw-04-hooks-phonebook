import { useState } from 'react';
import PropTypes from "prop-types";
import Style from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

    const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={Style.form}>
      <label className={Style.label}>
        Name
        <input
          className={Style.input}
          type="text"
          placeholder="type name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={Style.label}>
        Number
        <input
          className={Style.input}
          type="tel"
          placeholder="999-99-99"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={Style.button}>
        add contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};