import PropTypes from 'prop-types';


const ContactPinned = ({ contact, onClear }) => {
  return (
    <div className="contact-detail card p-4 border-0 shadow-sm  mt-5">
      <h3 className="mb-3">Contacto Destacado</h3>
      {contact ? (
        <div className="card p-3 bg-light border-0 shadow-lg rounded-3">
          <div className="mb-0 fw-bold">Name: {contact.fullname}</div>
          <div>Email: {contact.email}</div>
          <div>Phone: 📞 {contact.phonenumber} </div>
          <div>Type: {contact.type}</div>
          <button className="btn btn-danger mt-3" onClick={onClear}>Limpiar</button>
        </div>
      ) : (
        <div className="card p-3 bg-light border-0 shadow-lg rounded-3">
          <div>Ningún contacto seleccionado</div>
        </div>
      )}
    </div>
  );
};

ContactPinned.propTypes = {
  contact: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    phonenumber: PropTypes.string,
    type: PropTypes.string,
  }),
  onClear: PropTypes.func.isRequired,
};

export default ContactPinned;