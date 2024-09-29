import { useState, useEffect } from "react";
import addIcmUser from "../../../Api/addIcmUser";
import updateIcmUser from "../../../Api/updateIcmUser";
import Modal from "./Modal/ModalAddUser";
import ModalInfo from "./Modal/ModalInfo";
import ModalEdit from "./Modal/ModalEdit";
import { FaUserPlus,FaTrash } from "react-icons/fa6";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import getAllIcmUser from "../../../Api/getAllIcmUser";
import Table from "../../../component/table/Table";
import deleteIcmUser from "../../../Api/deleteIcmUser";
import ModalDelete from "./Modal/ModalDelete";
export const Main = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);  // State for delete modal

  useEffect(() => {
    const getData = async () => {
      const result = await getAllIcmUser();
      setData(result);
    };

    getData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddUser = async () => {
    const addedUser = await addIcmUser(newUser);
    setData([...data, addedUser]);
    setNewUser({
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewUser({ ...newUser, image: fileURL });
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    if (selectedUser && selectedUser.id) {
      try {
        const response = await updateIcmUser({
          ...selectedUser,  
          ...updatedUser,  
          id: selectedUser.id,  
        });
        setData(data.map((user) => (user.id === response.id ? response : user)));
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    } else {
      console.error("Selected user is not valid:", selectedUser);
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
      (user?.firstName &&
        user?.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user?.lastName &&
        user?.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredData.length / usersPerPage);
  console.log({ data });

  const handleDeleteUser = async () => {
    if (selectedUser && selectedUser.id) {
      try {
        await deleteIcmUser(selectedUser.id);
        setData(data.filter((user) => user.id !== selectedUser.id));
        setIsDeleteModalOpen(false);  
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true); 
  };
  const headerMappings = {
    username: "Username",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone Number",
    actions: "Actions",
  };
  const headers = ["username", "firstName", "lastName", "phone", "actions"];

  const tableData = filteredData.map((user) => ({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    actions: (
      <div className="">
        <button
          onClick={() => handleShowUser(user)}
          className="bg-green-500 text-white px-2 py-1 rounded ml-2"
        >
          <FaEye />
        </button>
        <button
          onClick={() => handleEditUser(user)}
          className="bg-blue-400 text-white px-2 py-1 rounded ml-2 "
        >
          <CiEdit className="bg-blue-400" />
        </button>
        <button
          onClick={() => handleDeleteClick(user)}  
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          <FaTrash />
        </button>
      </div>
    ),
  }));

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

      <Table
        headers={headers}
        data={tableData}
        headerMappings={headerMappings}
      />

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

      <ModalEdit
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdateUser={handleUpdateUser}
        user={selectedUser}
        setUser={setSelectedUser}
      />
        <ModalDelete
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};
