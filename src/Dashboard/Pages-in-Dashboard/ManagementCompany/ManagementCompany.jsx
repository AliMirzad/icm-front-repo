// ManagementCompany.js
import React, { useState, useEffect } from "react";
import getDataCompany from "../../../Api/getDataCompany";
import Modal from "./Modal/Modal";
import updateStatus from "../../../Api/siteRequest";
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
  console.log(data);


  const handleConfirmStatus = async (companyId) => {
    try {
      // به‌روزرسانی وضعیت در سرور
      await updateStatus(companyId, 1);
      
      // به روزرسانی وضعیت در حالت محلی
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
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-lg text-center">
          <thead className="bg-gray-200">
            <tr className="text-center">
              <th className="py-3 px-4 border-b text-center">Company Name</th>
              <th className="py-3 px-4 border-b text-center">Boss Name</th>
              <th className="py-3 px-4 border-b text-center">Email</th>
              <th className="py-3 px-4 border-b text-center">Address</th>
              <th className="py-3 px-4 border-b text-center">Status</th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCompanies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b">{company.name}</td>
                <td className="py-3 px-4 border-b">{company.boss}</td>
                <td className="py-3 px-4 border-b">{company.email}</td>
                <td className="py-3 px-4 border-b">{company.address}</td>
                <td className="py-3 px-4 border-b">
                  {company.status === 0 ? "Pending" : "Confirmed"}
                </td>
                <td className="py-3 px-4 border-b">
                  <button
                    onClick={() => {
                      setSelectedCompany(company);
                      setIsModalOpen(true);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
