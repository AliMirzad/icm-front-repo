import axios from "axios";

const getAllPageType = async () => {
  const url = "http://5.34.207.195:8080/icm/baseInfo/v1/getPageTypes";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getAllPageType;