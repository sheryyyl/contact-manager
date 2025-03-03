import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onContactClick }) => {
  return (
    <div className="contact-list card border-0 mb-3 shadow-sm p-3 mt-5">
      <h3 className="text-primary fw-bold mt-3 ps-2">Mis Contactos</h3>
      <ul className="list-group ps-2">
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} onClick={() => onContactClick(contact)} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      fullname: PropTypes.string.isRequired,
      phonenumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  onContactClick: PropTypes.func.isRequired,
};

export default ContactList;