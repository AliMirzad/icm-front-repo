import React from "react";

const ModalEdit = ({ isOpen, onClose, onUpdateUser, user, setUser }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setUser({ ...user, image: fileURL }); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
      <div className="bg-white rounded-lg p-8 shadow-lg transform transition-transform duration-300 scale-100 hover:scale-105 w-[700px] max-h-[90vh] overflow-y-auto">
        <div className="w-full pb-4  rounded-md text-center flex items-center justify-between">
          <h4 className="text-xl pb-2  font-semibold text-blue-400 mb-6 border-b border-gray-400">
            ویرایش اطلاعات
          </h4>
          {user.image && (
            <img
              src={user.image}
              alt="User"
              className="w-24 h-24 object-cover rounded-full "
            />
          )}
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
                name="fname"
                placeholder="First Name"
                value={user.fname}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                نام خانوادگی
              </label>
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={user.lname}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
          </div>
          {/* edit */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-bold">انتخاب نقش :</label>
            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
            </select>
          </div>

          {/* Role, Email, and Phone side by side */}

          <div className="grid grid-cols-2 gap-4">
            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                تلفن همراه
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={user.phone}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>

            <div className="relative flex flex-col">
              <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
                ایمیل
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
              />
            </div>
          </div>

          {/* Address */}
          <div className="relative flex flex-col">
            <label className="absolute font-bold right-3 -top-3 text-gray-600 transition-all duration-300 bg-white px-1">
              آدرس
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={user.address}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
            />
          </div>
          {/* addres */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-bold">انتخاب تصویر :</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition duration-300 hover:shadow-md"
            />
            {/* {user.image && (
              <img
                src={user.image}
                alt="User"
                className="w-32 h-32 object-cover rounded mt-4 mx-auto"
              />
            )} */}
          </div>

          {/* Image Upload */}

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              ویرایش
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

export default ModalEdit;
