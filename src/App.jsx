import { useEffect, useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import ContactForm from './components/ContactForm';
import data from './data/contacts.json';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactHistory, setContactHistory] = useState([]);

  useEffect(() => {
    // Accede a la propiedad 'contacts' del objeto 'data'
    setContacts(data.contacts);
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setContactHistory((prevHistory) => {
      const newHistory = [contact, ...prevHistory];
      return newHistory.slice(0, 3); // Mantener solo los últimos 3 contactos
    });
  };

  const clearSelectedContact = () => {
    setSelectedContact(null);
  };

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <ContactPinned contact={selectedContact} onClear={clearSelectedContact} />
            <hr className="my-5" />
            <div className="mt-5">
              <h5>Historial de Contactos Seleccionados</h5>
              <ul className="list-group">
                {contactHistory.map((contact, index) => (
                  <li key={index} className="list-group-item">
                    {contact.fullname} - 📞 {contact.phonenumber}  {contact.email} - {contact.type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <ContactList contacts={contacts} onContactClick={handleContactClick} selectedContact={selectedContact} />
          </div>
          <ContactForm onAddContact={handleAddContact} />
        </div>
      </div>
    </>
  );
};

export default App;