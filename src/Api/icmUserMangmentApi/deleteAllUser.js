import axios from "axios";
import Cookies from "js-cookie";

const deleteAllUser = async (userId) => {
  const accessToken = Cookies.get("accessToken");
      
const api=`http://5.34.206.81:8080/icm/user/v1/deleteAllUserByCompanyCode/${userId}`
  try {
    const response = await axios.delete(api,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("User deleted:", response.data);
    console.log(api);
    
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export default deleteAllUser;
