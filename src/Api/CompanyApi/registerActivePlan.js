import axios from "axios";

const registerActivePlan =async (companyId,subscriptionPlanId) => {
    const accessToken = localStorage.getItem("accessToken");

    const Api =
      "http://5.34.206.81:8080/icm/exclusive/company/v1/activeSubscriptionPlanForCompany";
    console.log("📤 Sending API Request:", { companyId,subscriptionPlanId });
    try {
      const response = await axios.post(
        `${Api}`,
        {companyId,subscriptionPlanId },
  
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
}
 
export default registerActivePlan;