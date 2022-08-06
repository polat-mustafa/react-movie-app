import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://1mdb-data-searching.p.rapidapi.com/om',
  params: {i: 'tt1285016'},
  headers: {
    'X-RapidAPI-Key': '506546183amshb2ae4838a395c65p18627bjsn4e07b08ba5a8',
    'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});