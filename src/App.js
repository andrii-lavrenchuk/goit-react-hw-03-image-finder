import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import shortid from 'shortid';
// import Form from './Components/Form/Form';
// import ContactList from './Components/ContactList/ContactList';
// import Filter from './Components/Filter/Filter';
// import Title from './Components/Title/Title';
// import Container from './Components/Container/Container';
import ImageGallery from './Components/ImageGallery/ImageGallery';
// import ImagesInfo from './Components/ImagesInfo/ImagesInfo';
// import Modal from './Components/Modal/Modal';
// import Searchbar from './Components/Searchbar/Searchbar';

class App extends Component {
  // state = {
  //   imageName: '',
  // };
  state = {
    // searchQuery: '',
    // showModal: false,

    images: [],
    currentPage: 1,
    searchQuery: '',
    // isLoading: false,
    error: null,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // handleFormSubmit = imageName => {
  //   this.setState({ imageName });
  // };

  // onChangeQuery = query => {
  //   this.setState({
  //     searchQuery: query,
  //     currentPage: 1,
  //     images: [],
  //     error: null,
  //   });
  // };

  render() {
    // const { showModal } = this.state;

    return (
      <div>
        {/* <Searchbar onSubmit={this.onChangeQuery} /> */}

        <ToastContainer autoClose={3000} />
        {/* <button type="button" onClick={this.toggleModal}>
          Open
        </button> */}
        {/* <Searchbar onSubmit={this.handleFormSubmit} /> */}
        {/* <ImageGallery imageName={this.state.imageName} /> */}

        {/* {showModal && <Modal onClose={this.toggleModal}></Modal>} */}

        <ImageGallery />
      </div>
    );
  }
}

export default App;
