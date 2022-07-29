import { Component } from "react";
import axios from "axios";
import ImageGalleryItem from "components/ImageGalleryItem";
import Button from "components/Button";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const URL_KEY = '27903219-6f010dc630c8173d81668507d';

export default class ImageGallery extends Component {
    state = {
        hits: [],
    }
    
    // componentDidMount() {
    //     console.log('Mount')
    // }

    async componentDidUpdate(prevProps, prevState) {
        console.log('Update')
        const { page } = this.props;
        const prevSearchQuery = prevProps.searchQuery
        const currentSearchQuery = this.props.searchQuery
        if (prevSearchQuery !== currentSearchQuery) {
            const response = await axios.get('', {
                params: {
                    key: URL_KEY,
                    q: currentSearchQuery,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: true,
                    per_page: 12,
                    page: page,
                }
            });
            this.setState({ hits: response.data.hits });
            // if (prevProps.page !== page && page !== 1) {
            //     this.setState(prevState => ({
            //     hits: [...prevState.hits, ...response.data.hits]
            // }));
            // }
            // this.setState(prevState => ({
            //     hits: [...prevState.hits, ...response.data.hits]
            // }));
        }
        if (prevProps.page !== page && page !== 1) {
            const response = await axios.get('', {
                params: {
                    key: URL_KEY,
                    q: currentSearchQuery,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: true,
                    per_page: 12,
                    page: page,
                }
            });
            this.setState(prevState => ({
                hits: [...prevState.hits, ...response.data.hits]
            }));
        }
    }
    render() {
        const { handlePageIncrement } = this.props;
        const { hits } = this.state;
        return (
            <>
                <ul className="ImageGallery">
                    {hits == false ? <p>No hits</p> : <ImageGalleryItem hits={hits} />}
                    {/* <ImageGalleryItem hits={hits}/> */}
                </ul>
                {hits != false && <Button onClick={handlePageIncrement} />}
            </>
        )
    }
}