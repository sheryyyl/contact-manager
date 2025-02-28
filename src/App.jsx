import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';

function App() {
  const contactos = [
    { id: 1, nombre: 'Juan Perez', telefono: '123-456-7890', correo: 'juan.perez@example.com' },
    { id: 2, nombre: 'Maria Gomez', telefono: '098-765-4321', correo: 'maria.gomez@example.com' },
    { id: 3, nombre: 'Carlos Ruiz', telefono: '555-555-5555', correo: 'carlos.ruiz@example.com' },
    { id: 4, nombre: 'Ana Torres', telefono: '111-222-3333', correo: 'ana.torres@example.com' },
    { id: 5, nombre: 'Luis Fernandez', telefono: '444-555-6666', correo: 'luis.fernandez@example.com' },
    { id: 6, nombre: 'Sofia Martinez', telefono: '777-888-9999', correo: 'sofia.martinez@example.com' },
    { id: 7, nombre: 'Roberto Castro', telefono: '222-333-4444', correo: 'roberto.castro@example.com' },
    { id: 8, nombre: 'Elena Rivas', telefono: '999-000-1111', correo: 'elena.rivas@example.com' }
  ];

  const [selectedContact, setSelectedContact] = useState(contactos[0]);

  const handleContactClick = (contacto) => {
    setSelectedContact(contacto);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <ContactList contactos={contactos} onContactClick={handleContactClick} />
          </div>
          <div className="col-md-5">
            <ContactDetail contacto={selectedContact} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;