import axios from "axios";

const getDataCompany = async () => {
  const url = "http://localhost:3000/company";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getDataCompany;
