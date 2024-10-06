import React from "react";

const Modal = ({ isOpen, onClose, onSubmit, siteInfo, onInputChange }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">اطلاعات سایت</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">نام سایت:</label>
            <input
              type="text"
              name="siteName"
              value={siteInfo.siteName}
              onChange={onInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">آدرس سایت:</label>
            <input
              type="url"
              name="siteURL"
              value={siteInfo.siteURL}
              onChange={onInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">توضیحات:</label>
            <textarea
              name="description"
              value={siteInfo.description}
              onChange={onInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              rows="4"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-300 rounded-md p-2"
            >
              بستن
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
