import axios from 'axios';

const FetchData = async (endpoint) => {
  try {
    const response = await axios.get(`http://localhost:3000/${endpoint}`); 
    return response.data;
  } catch (err) {
    throw err;
  }
};

export default FetchData;
