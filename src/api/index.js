import axios from "axios";
// single movies get request
const options = {
  method: 'GET',
  url: 'https://1mdb-data-searching.p.rapidapi.com/om',
  params: {i: 'tt1285016'},
  headers: {
    'X-RapidAPI-Key': '506546183amshb2ae4838a395c65p18627bjsn4e07b08ba5a8',
    'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
  }
};
// all movies get request
const optionss = {
  method: 'GET',
  url: 'https://1mdb-data-searching.p.rapidapi.com/om',
  params: {s: 'Lion'},
  headers: {
    'X-RapidAPI-Key': '506546183amshb2ae4838a395c65p18627bjsn4e07b08ba5a8',
    'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
  }
};

// SINGLE MOVIE GET REQUEST
export const getMovie = async () => {
  const response = await axios(options);
  return response.data;
}
// ALL MOVIES GET REQUEST
export const getAllMovies = async () => {
  const response = await axios(optionss);
  return response.data;
}



