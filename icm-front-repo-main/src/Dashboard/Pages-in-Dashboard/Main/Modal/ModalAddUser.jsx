// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, onAddUser, newUser, setNewUser }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser();
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setNewUser({ ...newUser, image: fileURL });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
      <div className="bg-white rounded-lg p-8 shadow-lg transform transition-transform duration-300 scale-100 hover:scale-105 w-[700px] max-h-[90vh] overflow-y-auto">
        <div className="w-[30%]  rounded-md text-center">
          <h4 className="text-xl pb-2  font-semibold text-blue-400 mb-6 border-b border-gray-400">
            اضافه کردن کاربر جدید
          </h4>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* First Name and Last Name side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                نام
              </label>
              <input
                type="text"
                placeholder=" "
                value={newUser.firstName || ""}
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                نام خانوادگی
              </label>
              <input
                type="text"
                placeholder=" "
                value={newUser.lastName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
          </div>
          <div className="relative flex flex-col">
            <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
              نام کاربری
            </label>
            <input
              type="text"
              placeholder=" "
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
            />
            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                رمز عبور
              </label>
              <input
                type="password"
                placeholder=" "
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                تلفن همراه
              </label>
              <input
                type="number"
                placeholder=" "
                value={newUser.phone}
                onChange={(e) =>
                  setNewUser({ ...newUser, phone: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>

            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                ایمیل
              </label>
              <input
                type="email"
                placeholder=" "
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
          </div>

          <div className="relative flex flex-col">
            <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
              مرا به خاطر بسپار
            </label>
            <input
              type="checkbox"
              checked={newUser.rememberMe}
              onChange={(e) =>
                setNewUser({ ...newUser, rememberMe: e.target.checked })
              }
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300 shadow-md"
            >
              لغو
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
