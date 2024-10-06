import axios from "axios";

const getAllTypesCode = async () => {
  const url = "http://5.34.207.195:8080/icm/baseInfo/v1/getTypesByCode/{code}";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getAllTypesCode;