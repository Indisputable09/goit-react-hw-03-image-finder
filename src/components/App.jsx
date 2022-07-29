import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import '../../src/styles.css'
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    isLoading: false,
  }

  handlePageIncrement = () => {
    this.setState(prevState => (
      {page: prevState.page + 1}
    ))
  };

  handleFormSubmit = searchQuery => {
  this.setState({ searchQuery, page: 1 });
    console.log(this.state.page)
  };
  
  render() {
    const { handleFormSubmit, handlePageIncrement} = this;
    const { searchQuery, page } = this.state;
    return (
      <div className="App">
        <GlobalStyle />
        {/* <ToastContainer autoClose={5000}/> */}
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery searchQuery={searchQuery} page={page} handlePageIncrement={handlePageIncrement} />
        {/* <Button/> */}
        {/* <Searchbar/> <ImageGallery> <ImageGalleryItem/> <Loader> <Button> <Modal>*/}
      </div>
    );
  }
};
