import axios from 'axios';

const BASE_URL = 'https://freetestapi.com/api/v1/';


export const fetchAnimalsByCategoryRequest = async (search, category) => {
  try {
    const response = await axios.get(`${BASE_URL}${category}`, {params: {search}});
    return response.data;
  } catch (error) {
    throw error;
  }
};



