import { useState, useEffect } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactHistory, setContactHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const fetchData = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.message === 'Failed to fetch') {
        setErrorMessage('Error de conexión: No se pudo conectar con la API');
      } else {
        setErrorMessage('Error al cargar contactos');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveContact = async (data) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newContact = await response.json();
      handleAddContact(newContact);
    } catch (error) {
      setErrorMessage('Error al guardar contacto');
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mt-5">
            <ContactForm onAddContact={handleAddContact} saveContact={saveContact} />
          </div>
          <div className="col-md-8">
            <div className="d-flex justify-content-center pt-5">
              <button onClick={fetchData} disabled={isLoading} className="btn btn-dark">
                {isLoading ? 'Loading...' : 'Fetch Contacts'}
              </button>
            </div>
            {errorMessage && (
              <div className="mt-3">
                <p style={{ color: 'red' }}>{errorMessage}</p>
                <div className="d-flex justify-content-center">
                  <button onClick={fetchData} disabled={isLoading} className="btn btn-dark">
                    {isLoading ? 'Loading...' : 'Reintentar'}
                  </button>
                </div>
              </div>
            )}
            <ContactList contacts={contacts} onContactClick={handleContactClick} selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;