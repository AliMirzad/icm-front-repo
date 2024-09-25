import { useState, useEffect } from "react";
import fetchData from "../../../Api/getDataUserIcm";
import AddUser from "../../../Api/addUser";
import updateUser from "../../../Api/updateUser";
import Modal from "./Modal-for-add-user/Modal";
import ModalInfo from "./modal-for-detail-userInfo/ModalInfo";
import EditUserModal from "./Modal-For-Edit/EditUserModal";
import { FaUserPlus } from "react-icons/fa6";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

export const Main = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddUser = async () => {
    const addedUser = await AddUser(newUser);
    setData([...data, addedUser]);
    setNewUser({
      fname: "",
      lname: "",
      userName: "",
      email: "",
      phone: "",
      address: "",
      role: "",
      image: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewUser({ ...newUser, image: fileURL });
    }
  };

  const handleUpdateUser = async () => {
    if (selectedUser) {
      const updatedUser = await updateUser(selectedUser);
      setData(
        data.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
    }
  };

  const handleShowUser = (user) => {
    setSelectedUser(user);
    setIsDetailModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const filteredData = data.filter(
    (user) =>
      (user.fname &&
        user.fname.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.lname &&
        user.lname.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredData.length / usersPerPage);

  return (
    <div className="flex flex-col justify-center w-full items-center h-4/5 rounded-3xl bg-gray-100 mt-3 mx-auto p-4">
      <div className="flex w-full justify-between items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 p-2 border rounded"
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 p-2 bg-blue-500 text-white rounded-3xl"
        >
          <FaUserPlus />
        </button>
      </div>
      <table className="min-w-full bg-white -gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="px-4 py-2">{user.fname}</td>
              <td className="px-4 py-2">{user.lname}</td>
              <td className="py-2 text-center">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={`${user.fname} ${user.lname}`}
                    className="block mx-auto w-16 h-16 object-cover rounded"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded mx-auto"></div>
                )}
              </td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleShowUser(user)}
                  className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-blue-400 text-white px-2 py-1 rounded"
                >
                  <CiEdit className="bg-blue-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4 w-4/5 items-center">
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          <FcNext />
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          <FcPrevious className="" />
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
        newUser={newUser}
        setNewUser={setNewUser}
        handleFileChange={handleFileChange}
      />

      <ModalInfo
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        user={selectedUser}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdateUser={handleUpdateUser}
        user={selectedUser}
        setUser={setSelectedUser}
      />
    </div>
  );
};
