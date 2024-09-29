import { useState } from "react";
import Table from "../../../component/table/Table";
import { FaUserPlus } from "react-icons/fa6";

const usersData = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "123-456-7890",
    position: "Manager",
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "234-567-8901",
    position: "Developer",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "345-678-9012",
    position: "Designer",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    phone: "456-789-0123",
    position: "Analyst",
  },
  {
    id: 5,
    name: "Eva Adams",
    email: "eva@example.com",
    phone: "567-890-1234",
    position: "HR",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    phone: "678-901-2345",
    position: "Sales",
  },
];

export const BaseInfoManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const headers = ["name", "email", "phone", "position"]; // Define the headers you want to display

  return (
    <div className="flex justify-center w-full items-center h-4/5 rounded-3xl bg-gray-100 mt-3 mx-auto">
      <div className="p-6 w-4/5">
        <h1 className="text-2xl font-bold mb-4">Manage User Company Page</h1>
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
          className="mb-4 p-2 bg-blue-500 text-white rounded-3xl"
        >
          <FaUserPlus />
        </button>
          </div>
        </div>
        <Table headers={headers} data={currentUsers} />{" "}
        {/* Use your general table component */}
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
    </div>
  );
};
