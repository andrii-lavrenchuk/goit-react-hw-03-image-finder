import { Component } from 'react';
// import shortid from 'shortid';
// import Form from './Components/Form/Form';
// import ContactList from './Components/ContactList/ContactList';
// import Filter from './Components/Filter/Filter';
// import Title from './Components/Title/Title';
// import Container from './Components/Container/Container';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={this.toggleModal}>
          Open
        </button> */}
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
        <Searchbar />
      </div>
    );
  }
}

export default App;
