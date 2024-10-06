const RegisterType = async (newUser) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
  
      const response = await fetch("http://5.34.207.195:8080/icm/user/v1/registerIcmUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  
  export default RegisterType;
  