import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import {
  SearchBarStyled,
  SearchForm,
  ButtonSearchForm,
  InputSearchForm,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    photoName: '',
  };
  onChange = e => {
    this.setState({ photoName: e.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.photoName.trim() === '') {
      Notiflix.Notify.warning('Введіть фото');
      // toast('введи фото');
      return;
    }
    this.props.onSubmit(this.state.photoName);
    this.setState({ photoName: '' });
  };

  render() {
    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <ButtonSearchForm type="submit">
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
              alt="seach"
            ></img>
          </ButtonSearchForm>
          <InputSearchForm
            name="photoName"
            value={this.state.photoName}
            onChange={this.onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
// <form onSubmit={this.handleSubmit}>
//   <ContactsLabel>
//     <span className="text">Name </span>
//     <Field
//       onChange={this.onChange}
//       type="text"
//       name="name"
//       value={this.state.name}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </ContactsLabel>
//   <ContactsLabel>
//     <span className="text">Number</span>
//     <Field
//       onChange={this.onChange}
//       type="tel"
//       name="number"
//       value={this.state.number}
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//   </ContactsLabel>
//   <Button type="submit">Add contact</Button>
// </form>

// SearchBar.propTypes = {
//   onAddContactInfo: PropTypes.func.isRequired,
// };
