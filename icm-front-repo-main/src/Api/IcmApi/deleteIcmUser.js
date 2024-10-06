import axios from 'axios';

const deleteIcmUser = async (userId, accessToken) => {
  try {
    const response = await axios.delete(`http://5.34.207.195:8080/icm/user/deleteIcmUser/${userId}`, {
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
