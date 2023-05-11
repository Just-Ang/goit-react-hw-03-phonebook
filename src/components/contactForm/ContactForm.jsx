import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../contactForm/contactForm.module.css';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.props.onSubmit({ name, number });
    form.reset();
   

    this.setState({ name: name });
    this.setState({ number: number });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label  className={css.label} htmlFor={this.nameId}>
          Name
          <input
          className={css.input}
            id={this.nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label} htmlFor={this.numerId}>
          Number
          <input
           className={css.input}
            id={this.numerId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button  className={css.btn} type="submit">Add contact</button>
      </form>
    );
  }
}
