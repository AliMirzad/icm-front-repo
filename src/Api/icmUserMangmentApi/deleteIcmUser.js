import axios from 'axios';
import Cookies from 'js-cookie'

const deleteIcmUser = async (userId) => {
      const accessToken=Cookies.get("accessToken")
    
  try {
    const response = await axios.delete(`http://5.34.206.81:8080/icm/user/v1/deleteUser/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('User deleted:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export default deleteIcmUser;
