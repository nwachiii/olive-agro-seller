import axios from 'axios';

// Base url to make requests to the database/i.e a slice similar to all requests link
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default instance;
