import axios from 'axios';

const BASE_URL = 'https://swapi.dev/documentation';

export const fetchEntities = async (endpoint, page) => {
  const response = await axios.get(`${BASE_URL}/${endpoint}/?page=${page}`);
  return response.data;
};
