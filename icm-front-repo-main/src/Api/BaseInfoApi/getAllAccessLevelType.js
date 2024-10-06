import axios from "axios";

const getAllAccessLevelType = async () => {
  const url = "http://5.34.207.195:8080/icm/baseInfo/v1/getAccessLevelTypes";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default getAllAccessLevelType;