import axios from 'axios';
import Cookies from 'js-cookie'

const deleteType = async (userId) => {
  const accessToken=Cookies.get("accessToken")
  
  try {
    const response = await axios.delete(`http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/deleteManagementType/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export default deleteType;
