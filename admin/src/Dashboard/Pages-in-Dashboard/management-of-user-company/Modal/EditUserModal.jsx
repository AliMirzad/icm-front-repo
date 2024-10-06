// EditUserModal.js
import React from 'react';

const EditUserModal = ({ isOpen, onClose, user, onUpdateUser }) => {
  const [updatedUser, setUpdatedUser] = React.useState(user);

  React.useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(updatedUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-8 shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={updatedUser.fname}
            onChange={(e) => setUpdatedUser({ ...updatedUser, fname: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={updatedUser.lname}
            onChange={(e) => setUpdatedUser({ ...updatedUser, lname: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Email"
            value={updatedUser.email}
            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            value={updatedUser.phone}
            onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="Position"
            value={updatedUser.role}
            onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
            <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
