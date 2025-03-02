import axios from "axios";

const getPlan = async() => {
    const url = `http://5.34.206.81:8080/icm/exclusive/subscriptionPlan/v1/getListOfSubscriptionPlan`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
}
 
export default getPlan;