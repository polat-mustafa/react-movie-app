import axios from 'axios';

const api = 'https://imdb-api.com/en/API/Top250Movies/k_0vl1sgc0'


export const getMovies = async () => {
  const { data } = await axios.get(api);
  return data;
}


