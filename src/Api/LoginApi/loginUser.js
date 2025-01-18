import axios from "axios";
import Cookies from 'js-cookie'

export const loginUser = async (username, password) => {
  const Api = "http://5.34.206.81/icm/user/login";

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
    Cookies.set("accessToken", accessToken, { expires: 1, secure: true }); 
    Cookies.set("refreshToken", refreshToken, { expires: 7, secure: true });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    console.log(`${Api}/login`);

    return response.data; 
  } catch (error) {
    const backendMessage = error.response?.data?.errorMessages[0]?.error || "An error occurred";
    throw new Error(backendMessage);

  }
};