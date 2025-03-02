import axios from "axios";

const getAllLocationType = async () => {
  const url = "http://5.34.206.81:8080/icm/baseInfo/v1/getAllLocationInfo";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getAllLocationType;