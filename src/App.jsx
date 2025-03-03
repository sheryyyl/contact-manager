import { useEffect, useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import data from './data/contacts.json';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Accede a la propiedad 'contacts' del objeto 'data'
    setContacts(data.contacts);
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const clearSelectedContact = () => {
    setSelectedContact(null);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <ContactPinned contact={selectedContact} onClear={clearSelectedContact} />
          </div>

          <div className="col-md-7">
            <ContactList contacts={contacts} onContactClick={handleContactClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
