import React, { Component } from 'react';
import s from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.item}>
              {name}: {number}
              <button
                type="button"
                onClick={() => onDelete(id)}
                className={s.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
