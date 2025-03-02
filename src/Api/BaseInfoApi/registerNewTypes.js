import axios from "axios";

const registerNewTypes = async (code, subType, title, priority) => {
  // try {
  //   const accessToken = localStorage.getItem("accessToken");

  //   const response = await fetch("http://5.34.207.195:8080/icm/baseInfo/v1/getFileTypes", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${accessToken}`,
  //     },
  //     body: JSON.stringify(newUser),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error("Error adding user:", error);
  // }
  // try{
  //   const response=await axios.post(api,newUser, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //   return response
  // }catch(error){
  //   console.log(error);

  // }
  const accessToken = localStorage.getItem("accessToken");

  const Api =
    "http://5.34.206.81:8080/icm/exclusive/baseInfo/v1/registerManagementType";
  console.log("📤 Sending API Request:", { code, subType, title, priority });
  try {
    const response = await axios.post(
      `${Api}`,
      { code, subType, title, priority },

      {
        headers: {
          "Content-Type": "application/json",
          
        },
        responseType: "json",
        responseEncoding: "utf-8",
      }
    );

    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    const backendMessage =
      error.response?.data?.errorMessages[0]?.error || "An error occurred";
    throw new Error(backendMessage);
  }
};

export default registerNewTypes;
