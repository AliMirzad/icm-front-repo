// UserDetailModal.js
import React from 'react';

const UserDetailModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-8 shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <img src={user.image} alt={`${user.fname} ${user.lname}`} className="w-full h-32 object-cover rounded mb-4" />
        <p><strong>Full Name:</strong> {user.fname} {user.lname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Position:</strong> {user.role}</p>
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
