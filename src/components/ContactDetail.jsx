import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactDetail = ({ contacto }) => {
  return (
    <div className="contact-detail card p-4 border-0 shadow-sm">
      <h3 className="mb-3">Contacto Destacado</h3>
      <div className="card p-3 bg-light border-0 shadow-lg rounded-3">
        <p><strong>Nombre:</strong> {contacto.nombre}</p>
        <p><strong>Teléfono:</strong> {contacto.telefono}</p>
        <p><strong>Correo:</strong> {contacto.correo}</p>
      </div>
    </div>
  );
};
ContactDetail.propTypes = {
  contacto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactDetail;