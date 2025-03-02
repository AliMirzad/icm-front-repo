import axios from "axios";

const getLocation = async () => {
  try {
    let data = await axios.get(
      "http://5.34.206.81:8080/icm/baseInfo/v1/getAllLocationInfo"
    );
    return data.data;
  } catch (error) {
    console.log("error");
  }
};

export default getLocation;
