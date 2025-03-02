import axios from "axios";

const updateTypes = async (id,code,type,title,pro,email) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await axios.put(`http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/updateManagementType/${id}`, {id,code,type,title,pro,email},{
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },

    });

    console.log(response.data);
    
  } catch (error) {
    console.error("Error updating user:", error);
  }
  };
  
  export default updateTypes
