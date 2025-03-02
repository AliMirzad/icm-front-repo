import axios from "axios";
import Cookies from "js-cookie";
/*
 data.username.trim(),
        data.password.trim(),
        data.firstName.trim(),
        data.lastName.trim(),
        data.email.trim(),
        data.phone.trim(),
        data.birthDate.trim(),
        +data.locationFold,
        +data.genderId,
        data.exactLocation.trim(),
        data.postalCode.trim(),
        data.nationalCode.trim(),
        data.companyId.trim(),
*/
const adduser = async (
  username,
  password,
  firstName,
  lastName,
  email,
  phone,
  birthDate,
  locationInfoId,
  genderId,
  exactLocation,
  postalCode,
  nationalCode,
  companyId
) => {
  const Api = "http://5.34.206.81:8080/icm/user/v1/registerUser";

  try {
    const response = await axios.post(
      Api,
      {
        username,
        password,
        firstName,
        lastName,
        email,
        phone,
        birthDate,
        locationInfoId,
        genderId,
        exactLocation,
        postalCode,
        nationalCode,
        companyId,
      },

      {
        headers: { "Content-Type": "application/json" },
        responseType: "json",
        responseEncoding: "utf-8",
      }
    );

    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    Cookies.set("accessToken", accessToken, { expires: 1, secure: true });
    Cookies.set("refreshToken", refreshToken, { expires: 7, secure: true });
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

    return response.data;
  } catch (error) {
    const backendMessage =
      error.response.data.errorMessages[0].error || "An error occurred";
    throw new Error(backendMessage);
  }
};
export default adduser;
