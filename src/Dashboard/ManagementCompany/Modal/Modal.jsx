import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, company, onConfirm }) => {
  const [localCompany, setLocalCompany] = useState(company);

  useEffect(() => {
    if (company) {
      setLocalCompany(company);
    }
  }, [company]);

  const handleConfirm = () => {
    if (localCompany) {
      onConfirm(localCompany.id); 
      onClose();
    }
  };

  if (!isOpen || !company) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Company Details</h2>
        <div className="mb-4">
          <strong>Name:</strong> {localCompany?.fname}
        </div>
        <div className="mb-4">
          <strong>Boss:</strong> {localCompany?.boss}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {localCompany?.email}
        </div>
        <div className="mb-4">
          <strong>Address:</strong> {localCompany?.address}
        </div>
        <div className="mb-4">
          <strong>Status:</strong> {localCompany?.status === 0 ? "Pending" : "Confirmed"}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
