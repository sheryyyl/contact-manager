import PropTypes from 'prop-types';

const ContactItem = ({ contact, onClick }) => {
  return (
    <div className="contact-list card border-0 mb-3">
      <ul className="list-group ps-2">
        <li onClick={onClick} className="d-flex align-items-center gap-3 p-2 border-bottom hover-shadow mb-2">
          <div className="d-flex flex-column flex-grow-1">
            <div className="mb-0 fw-bold">Name: {contact.fullname}</div>
            <div>Email: {contact.email}</div>
          </div>
          <div>Phone: {contact.phonenumber}</div>
          <div>Type: {contact.type}</div>
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
};

export default ContactItem;