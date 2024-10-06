import axios from "axios";

const getUserCompany = async () => {
  const url = "http://localhost:3000/userCompani";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getUserCompany;

