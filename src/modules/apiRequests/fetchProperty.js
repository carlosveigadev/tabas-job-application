import axios from 'axios';

const fetchProperty = (id) => axios({
  url: `http://127.0.0.1:3000/properties/${id}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res).catch(err => err);

export default fetchProperty;