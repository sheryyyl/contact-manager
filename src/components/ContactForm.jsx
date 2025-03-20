import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact, saveContact }) => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('familia');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = { fullname, phonenumber, email, type };
    await saveContact(newContact);
    setFullname('');
    setPhonenumber('');
    setEmail('');
    setType('familia');
  };

  return (
    <div className="contact-list card border-0 mb-3 shadow-sm p-3 mt-5">
      <h3 className="fw-bold mt-3 ps-2">Formulario de Contacto</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número Telefónico</label>
          <input
            type="text"
            className="form-control"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo</label>
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="familia">Familia</option>
            <option value="social">Social</option>
            <option value="trabajo">Trabajo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Guardar Contacto</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired,
};

export default ContactForm;