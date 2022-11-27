import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import { searchPhoto } from 'service/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
// import { ContactsList } from 'components/ContactsList/ContactsList';
// import Filter from 'components/Filter/Filter';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { RotatingLines } from 'react-loader-spinner';
import { AppStyled } from './App.styled';

class App extends Component {
  state = {
    photoName: '',
    photos: [],
    loading: false,
    page: 1,
  };
  componentDidUpdate(prevState, _) {
    if (
      prevState.page !== this.state.page ||
      prevState.photoName !== this.state.photoName
    ) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.photoName}&page=${this.state.page}&key=30991696-519a4b1ee3d2e3a1698f60a04&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(photos => this.setState({ photos: photos.hits }));
    }
    return;
  }

  handelFormSubmit = photoName => {
    this.setState({ photoName });
  };

  render() {
    return (
      <AppStyled>
        <SearchBar onSubmit={this.handelFormSubmit}></SearchBar>
        {this.state.loading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        {this.state.photos.length > 0 && (
          <ImageGallery photos={this.state.photos}></ImageGallery>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* <ImageGallery /> */}
      </AppStyled>
    );
  }
}

export default App;
// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const contactsParse = JSON.parse(contacts);
//   if (contactsParse) {
//     this.setState({ contacts: contactsParse });
//   }
// }
// componentDidUpdate(prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }
// onAddContactInfo = contactObj => {
//   if (
//     this.state.contacts.find(
//       cont => cont.name.toLowerCase() === contactObj.name.toLowerCase()
//     )
//   ) {
//     return alert(`${contactObj.name} is already in contacts`);
//   }
//   this.setState(prevStat => {
//     return { contacts: [contactObj, ...this.state.contacts] };
//   });
// };

// onAddFilter = e => {
//   this.setState(() => {
//     return { filter: e.target.value };
//   });
// };

// filterContacts = () => {
//   const { contacts, filter } = this.state;
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// onDelete = contactId => {
//   this.setState(prevStat => {
//     return {
//       contacts: prevStat.contacts.filter(cont => cont.id !== contactId),
//     };
//   });
// };
