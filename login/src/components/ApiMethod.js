import axios from "axios";

const Api = "http://5.34.207.195:8080/icm/user";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      `${Api}/login`,
      { username, password },
      {
        headers: { "Content-Type": "application/json" },
        responseType: 'json', 
        responseEncoding: 'utf8', 
      }
    );

    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    
    return response.data; 
  } catch (error) {
    const backendMessage = error.response?.data?.errorMessages[0]?.error || "An error occurred";
    throw new Error(backendMessage);
  }
};
