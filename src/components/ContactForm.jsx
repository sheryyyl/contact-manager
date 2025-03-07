import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { fullname, phonenumber, email, type };
    onAddContact(newContact);
    setFullname('');
    setPhonenumber('');
    setEmail('');
    setType('');
  };

  return (
    <div className="card shadow-sm mt-5 mx-auto" style={{ maxWidth: '500px' }}>
      <div className="card-body">
        <h5 className="card-title">Agregar Nuevo Contacto</h5>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <input
              type="text"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark mb-3">Guardar</button>
        </form>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;