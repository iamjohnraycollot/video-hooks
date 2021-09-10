import axios from 'axios'

const KEY = 'AIzaSyB7mQel4PdQOqoT0F_2ht9cO9C6mJnzmJc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});