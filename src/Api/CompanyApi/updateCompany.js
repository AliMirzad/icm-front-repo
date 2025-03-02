
import axios from "axios";

const updateCompany = async (id,code,type,title,pro) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await axios.put(`http://5.34.206.81:8080/icm/exclusive/company/v1/updateCompany/${id}`, {id,code,type,title,pro},{
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
  }
  };
  
  export default updateCompany
