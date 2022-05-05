import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';

export default class Filter extends Component {
  inputFilter = nanoid();

  render() {
    const { filter, onFilter } = this.props;

    return (
      <>
        <h3 className={s.title}>Find contacts by name</h3>
        <label htmlFor={this.inputFilter} className={s.label}>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onFilter}
            id={this.inputFilter}
            className={s.input}
          />
        </label>
      </>
    );
  }
}
