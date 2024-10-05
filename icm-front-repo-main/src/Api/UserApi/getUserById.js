

import axios from "axios";

const getUserById = async () => {
  const url = "http://localhost:3000/usericm";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getUserById;



