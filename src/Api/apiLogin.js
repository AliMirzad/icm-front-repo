import axios from "axios";

const Api = "http://localhost:3000/usericm";


export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${Api}/login`, {
      username,
      password,
    });

    if (response.data.success) {
      return response.data.user; 
    } else {
      throw new Error("Invalid username or password.");
    }
  } catch (error) {
    throw error;
  }
};
