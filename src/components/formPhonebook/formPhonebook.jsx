import PropTypes from 'prop-types';
import styles from '../form/form.module.css';

const FormPhonebook = ({ filter, contacts, handleDeleteContacts }) => {
  return (
    <ul className={styles.contact}>
      {contacts
        .filter(el =>
          el.name.toLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(el => (
          <li key={el.id} className={styles.contactList}>
            <p className={styles.conParagraph}>
              {el.name}: <span>{el.number}</span>
            </p>
            <button
              className={styles.btn}
              type="button"
              onClick={() => handleDeleteContacts(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default FormPhonebook;

FormPhonebook.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  handleDeleteContacts: PropTypes.func.isRequired,
};