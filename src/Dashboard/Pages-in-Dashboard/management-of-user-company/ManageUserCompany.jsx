import React, { useState, useEffect } from "react";
import ModalAddUser from "./Modal/ModalAddUser";
import UserDetailModal from "./Modal/UserDetailModal";
import EditUserModal from "./Modal/EditUserModal";
import AddUserCompany from "../../../Api/addUserComoany";
import getUserCompany from "../../../Api/getDataUserCompany";
import { FaUserPlus } from "react-icons/fa6";

export const ManageUserCompany = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    role: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentEditUser, setCurrentEditUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    const getData = async () => {
      const result = await getUserCompany();
      setData(result);
    };

    getData();
  }, []);

  const handleAddUser = async () => {
    const addedUser = await AddUserCompany(newUser);
    setData([...data, addedUser]);
    setNewUser({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      role: "",
      image: "",
    });
    setIsModalOpen(false);
  };

  const handleUpdateUser = (updatedUser) => {
    setData(
      data.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsEditModalOpen(false);
  };

  const filteredUsers = data.filter(
    (user) =>
      user.userName &&
      user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleUserDetail = (user) => {
    setCurrentUser(user);
    setIsUserModalOpen(true);
  };

  const handleEditUser = (user) => {
    setCurrentEditUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <div className="flex justify-center w-full items-center h-4/5 rounded-3xl bg-gray-100 mt-3 mx-auto">
      <div className="p-6 w-4/5">
        <h1 className="text-2xl font-bold mb-4">مدیریت کارمندان شرکت</h1>
        <div className="flex justify-between mb-4 w-full">
          <div className="flex space-x-2 w-full justify-between">
            <input
              type="text"
              placeholder="Search users..."
              className="border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="mb-4 p-2 bg-blue-500 text-white rounded-3xl"
            >
              <FaUserPlus />
            </button>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border-b text-center">Full Name</th>
              <th className="py-3 px-4 border-b text-center">Email</th>
              <th className="py-3 px-4 border-b text-center">Phone</th>
              <th className="py-3 px-4 border-b text-center">Position</th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b text-center">
                  {user.fname} {user.lname}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {user.email || "N/A"}
                </td>
                <td className="py-3 px-4 border-b text-center">{user.phone}</td>
                <td className="py-3 px-4 border-b text-center">{user.role}</td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => handleUserDetail(user)}
                    className="text-blue-500"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-yellow-500 ml-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleNextPage}
            className={`p-2 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "bg-blue-500 text-white rounded-md"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handlePrevPage}
            className={`p-2 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "bg-blue-500 text-white rounded-md"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ModalAddUser
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={handleAddUser}
          newUser={newUser}
          setNewUser={setNewUser}
        />
      )}
      {isUserModalOpen && (
        <UserDetailModal
          isOpen={isUserModalOpen}
          onClose={() => setIsUserModalOpen(false)}
          user={currentUser}
        />
      )}
      {isEditModalOpen && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={currentEditUser}
          onUpdateUser={handleUpdateUser}
        />
      )}
    </div>
  );
};
