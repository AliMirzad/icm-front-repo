import axios from "axios";

const addCompany = async ( name,nationalCode, locationInfoId,exactLocation,postalCode,phone,email,hostUrl) => {
    const accessToken = localStorage.getItem("accessToken");

  const Api =
    "http://5.34.206.81:8080/icm/exclusive/company/v1/saveCompany";
  console.log("📤 Sending API Request:", { name,nationalCode, locationInfoId,exactLocation,postalCode,phone,email,hostUrl});
  try {
    const response = await axios.post(
      `${Api}`,
      { name,nationalCode, locationInfoId,exactLocation,postalCode,phone,email,hostUrl },

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

 
export default addCompany;