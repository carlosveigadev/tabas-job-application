import axios from 'axios';

const getPropertiesData = () => axios({
  url: `http://127.0.0.1:3000/properties/`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res).catch(err => err);

export default getPropertiesData