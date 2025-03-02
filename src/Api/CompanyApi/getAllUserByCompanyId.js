import axios from "axios";

const getAllUserByCompanyId = async (id) => {
  const url = `http://5.34.207.195:8080/icm/exclusive/company/v1/getCompanyById/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getAllUserByCompanyId;