import axios from 'axios';

const deleteNewTypes = async (userId, accessToken) => {
  try {
    const response = await axios.delete(`http://5.34.206.81:8080/icm/user/v1/deleteUser/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export default deleteNewTypes;
