const updateUser = async (user) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(`http://5.34.207.195:8080/icm/user/v1/updateUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Update failed:', errorResponse);
        throw new Error(`Failed to update user: ${errorResponse.message || response.statusText}`);
      }
  
      const updatedUser = await response.json();
      return updatedUser;
    } catch (error) {
      console.error('Error in updateIcmUser:', error);
      throw error;
    }
  };
  
  export default updateUser
  