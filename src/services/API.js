import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const URL_KEY = '27903219-6f010dc630c8173d81668507d';
export async function fetchData(searchQuery, page) {
  try {
    const response = await axios.get('', {
      params: {
        key: URL_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
      },
    });
    if (response.data.totalHits === 0) {
      toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    if (response.data.hits.length % 12 !== 0 && response.data.totalHits > 0) {
      toast.error("We're sorry, but you've reached the end of search results.");
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
