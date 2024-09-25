const updateUser = async (user) => {
    try {
      const response = await fetch(`http://localhost:3000/usericm/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      const updatedUser = await response.json();
      return updatedUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export default updateUser;
  