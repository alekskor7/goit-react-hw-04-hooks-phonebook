import { useState, useEffect } from 'react';
import uuid from "react-uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const addContact = data => {
    const { name } = data;
    const contactId = uuid();
    const newContact = { ...data, id: contactId };
    const isNotUniqueContact = contacts.some(contact =>
      contact.name.includes(name),
    );

    if (isNotUniqueContact) {
      window.alert(`${name} is already in contacts`);
      return;
    }

    setContacts(state => [...state, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filter),
    );
  };

  const filteredContacts = filterContacts();
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={changeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </>
  );
}