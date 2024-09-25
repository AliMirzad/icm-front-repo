import React from "react";

const AddUser = async (newUser) => {
  try {
    const response = await fetch("http://localhost:3000/usericm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the response data if needed
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export default AddUser;
