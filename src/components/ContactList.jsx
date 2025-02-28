import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = ({ contactos, onContactClick }) => {
  return (
    <div className="contact-list card border-0 mb-3 shadow-sm p-3">
      <h3 className="text-primary fw-bold mt-3 ps-2">Mis Contactos</h3>
      <ul className="list-group ps-2">
        {contactos.map((contacto) => (
          <li
            key={contacto.id}
            className="d-flex align-items-center gap-3 p-2 border-bottom hover-shadow mb-2"
            style={{ transition: "background 0.3s", cursor: "pointer" }}
            onClick={() => onContactClick(contacto)}
          >
            <div className="icon-placeholder" style={{ width: "30px", height: "30px", backgroundColor: "#ddd", borderRadius: "50%" }}></div>
            <div className="d-flex flex-column flex-grow-1">
              <p className="mb-0 fw-bold">{contacto.nombre}</p>
              <p className="mb-0 text-secondary">{contacto.telefono}</p>
            </div>
            <p className="mb-0 text-secondary text-end">{contacto.correo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contactos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
      correo: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactClick: PropTypes.func.isRequired,
};

export default ContactList;