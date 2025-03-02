
import axios from 'axios';
import Cookies from 'js-cookie'

const deleteCompany = async (userId) => {
  const accessToken = Cookies.get("accessToken");

  try {
    const response = await axios.delete(
      `http://5.34.206.81:8080/icm/exclusive/company/v1/deleteCompanyById/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting company:", error.response?.data || error);
    throw error;
  }
};


export default deleteCompany;
