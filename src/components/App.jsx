import { Component } from 'react';
import Form from './form/form';
import FormPhonebook from './formPhonebook/formPhonebook';
import Filter from './filter/filter';
import styles from './form/form.module.css';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...obj }],
    }));
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleDeleteContacts = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.boxPhone}>
          <h1 className={styles.titlePhone}>Phonebook</h1>
          <Form
            contacts={this.state.contacts}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className={styles.contacts}>
          <h2 className={styles.titleContact}>Contacts</h2>
          <h2 className={styles.titleFind}>find contacts by name</h2>
          <Filter handleChange={this.handleChange} />
          <FormPhonebook
            filter={this.state.filter}
            contacts={this.state.contacts}
            handleDeleteContacts={this.handleDeleteContacts}
          />
        </div>
      </div>
    
    );
  }
}