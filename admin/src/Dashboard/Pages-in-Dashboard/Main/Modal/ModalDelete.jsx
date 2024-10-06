import React from "react";

const ModalDelete = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 transform transition-transform duration-300 scale-95 hover:scale-100">
        <h3 className="text-lg font-semibold mb-4 text-red-600">
          حذف کاربر
        </h3>
        <p className="mb-6 text-gray-700">
         آیا از حذف این کاربر مطمین هستنید ؟
        </p>
        <div className="flex justify-center  gap-5 space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200"
          >
           خیر
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            بله
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
