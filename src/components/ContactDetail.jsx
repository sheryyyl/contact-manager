import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactDetail = ({ contacto }) => {
  return (
    <div className="contact-detail card p-4 border-0 shadow-sm">
      <h3 className="mb-3">Contacto Destacado</h3>
      <div className="card p-3 bg-light border-0 shadow-lg rounded-3">
        <p><strong>Nombre:</strong> {contacto.fullname}</p>
        <p><strong>Teléfono:</strong> {contacto.phonenumber}</p>
        <p><strong>Correo:</strong> {contacto.email}</p>
        <p><strong>Tipo:</strong> {contacto.type}</p>
      </div>
    </div>
  );
};

ContactDetail.propTypes = {
  contacto: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactDetail;