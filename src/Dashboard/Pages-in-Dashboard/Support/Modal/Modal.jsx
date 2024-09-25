import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md transform transition-all duration-500">
        <h2 className="text-3xl font-bold text-center mb-4">فرم پشتیبانی</h2>
        <p className="text-gray-600 text-center mb-4">
          لطفاً اطلاعات خود را وارد کنید:
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">نام:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">ایمیل:</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">پیام:</label>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="پیام خود را وارد کنید"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-300"
          >
            ارسال پیام
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500 underline">
          بستن
        </button>
      </div>
    </div>
  );
};

export default Modal;
