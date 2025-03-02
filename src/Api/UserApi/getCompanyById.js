import axios from "axios";

const getUserById = async (id) => {
  const url = `http://5.34.206.81:8080/icm/exclusive/company/v1/getCompanyById/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    console.log(url);
    return [];
  }
};

export default getUserById;
