import axios from "axios";

const customerRoleList = async () => {
  const url = "http://5.34.207.195:8080/icm/user/v1/getAllIcmUser";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};

export default customerRoleList;