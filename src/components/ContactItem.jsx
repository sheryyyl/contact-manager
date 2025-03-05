import PropTypes from 'prop-types';

const ContactItem = ({ contact, onClick, isSelected }) => {
  return (
    <div className="contact-list card border-0 mb-3">
      <ul className="list-group ps-2">
        <li
          onClick={onClick}
          className={`d-flex align-items-center gap-3 p-3 border rounded mb-2 transition-all ${isSelected ? 'bg-light text-dark shadow-lg' : 'bg-white shadow-sm'}`}
          style={{ cursor: 'pointer', borderLeft: isSelected ? '4px solid #6c757d' : '4px solid transparent' }}
        >
          <div className="d-flex flex-column flex-grow-1">
            <div className="mb-1 fw-bold fs-5"> Name: {contact.fullname}</div>
            <div className="text-muted"> Email: {contact.email}</div>
          </div>
          <div className="text-muted">📞 {contact.phonenumber}</div>
          <div className="badge bg-secondary text-white px-3 py-2">{contact.type}</div>
        </li>
      </ul>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ContactItem;