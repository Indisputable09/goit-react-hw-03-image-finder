import { Component } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast} from 'react-toastify';

export default class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    handleSubmit = (e) => {
        const { searchQuery } = this.state;
        const { onSubmit} = this.props;
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (searchQuery.trim() === '') {
            // toast('Write smth');
            alert('Write smth');
            return;
        }
        onSubmit(searchQuery);
        this.setState({ searchQuery: ''});
        e.currentTarget.reset();
    };

    handleChange = (e) => {
        const searchQuery = e.currentTarget.value.trim().toLowerCase();
        this.setState({searchQuery});
    };

    render() {
        const { handleChange, handleSubmit } = this;
        return (
            <header className="Searchbar">
                <form onSubmit={handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button"><AiOutlineSearch className="SearchForm-icon" />
                        {/* <span className="SearchForm-button-label"></span> */}
                    </button>

                    <input onChange={handleChange}
                        name="query"
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}