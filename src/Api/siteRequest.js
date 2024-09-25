const updateStatus = async (companyId, newStatus) => {
    const response = await fetch(`/api/companies/${companyId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to update status");
    }
  
    return response.json();
  };
  