/*

*/
import axios from "axios";

export const GetUser = async (id) => {

  const url = `http://5.34.206.81:8080/icm/user/v1/getUserInfo/${id}`;
  const response = await axios.get(url);

  try {
    return response.data;
  } catch {
    console.log(response.errorMessage[0].error);
    console.log(url);
  }
};
