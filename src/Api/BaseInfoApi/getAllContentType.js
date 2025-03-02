import axios from "axios";

const getAllContentType = async () => {
  const url = "http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/getAllManagementTypeCode";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getAllContentType;
//okay