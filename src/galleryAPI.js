import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39243044-4af96929b6ac359bb8b737176';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchImages;
