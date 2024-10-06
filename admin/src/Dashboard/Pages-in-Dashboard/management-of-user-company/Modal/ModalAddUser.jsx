import React from "react";

const ModalAddUser = ({ isOpen, onClose, onAddUser, newUser, setNewUser }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser();
    onClose(); 
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewUser({ ...newUser, image: fileURL });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-gradient-to-r from-white to-blue-100 rounded-xl p-8 shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105 w-[900px]">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Add New User
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* First Name and Last Name side by side */}
        <div className="flex space-x-4 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={newUser.fname}
            onChange={(e) => setNewUser({ ...newUser, fname: e.target.value })}
            className="p-3 border border-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={newUser.lname}
            onChange={(e) => setNewUser({ ...newUser, lname: e.target.value })}
            className="p-3 border border-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
          />
        </div>
        
        {/* Role and Email side by side */}
        <div className="flex space-x-4 gap-4 w-full">
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-3 border border-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>
          <input
            type="number"
            placeholder="phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            className="p-3 border border-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="p-3 border border-transparent rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
          />
        </div>
     

        {/* Address */}
        <input
          type="text"
          placeholder="Address"
          value={newUser.address}
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
          className="p-3 border border-transparent rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
        />

        {/* File Input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="p-3 border border-transparent rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-md"
        />

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Add User
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
);
};
export default ModalAddUser;
