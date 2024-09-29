// ManagementCompany.js
import React, { useState, useEffect } from "react";
import getDataCompany from "../../../Api/getDataCompany";
import Modal from "./Modal/Modal";
import updateStatus from "../../../Api/siteRequest";
import Table from '../../../component/table/Table'

export const ManagementCompany = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(4);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await getDataCompany();
      console.log("Fetched data:", result); 
      setData(result);
    };
    getData();
  }, []);

  const handleConfirmStatus = async (companyId) => {
    try {
      await updateStatus(companyId, 1);
      const updatedData = data.map((company) =>
        company.id === companyId ? { ...company, status: 1 } : company
      );
      setData(updatedData);

      const result = await getDataCompany();
      setData(result);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredCompanies = Array.isArray(data)
    ? data.filter(
        (company) =>
          company.name &&
          typeof company.name === "string" &&
          company.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const headers = ["name", "boss", "email", "address", "status", "actions"]; // تعریف هدینگ‌ها

  return (
    <div className="flex justify-center w-full items-center h-4/5 rounded-3xl bg-gray-100 mt-3 mx-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Management Company Page</h1>
        <input
          type="text"
          placeholder="Search companies..."
          className="border border-gray-300 rounded-md p-2 mb-4 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Table headers={headers} data={currentCompanies} />

        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(filteredCompanies.length / companiesPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          company={selectedCompany}
          onConfirm={() => {
            handleConfirmStatus(selectedCompany.id);
            setIsModalOpen(false);
            const result = async () => {
              const data = await getDataCompany();
              setData(data);
            };
            result();
          }}
        />
      </div>
    </div>
  );
};
