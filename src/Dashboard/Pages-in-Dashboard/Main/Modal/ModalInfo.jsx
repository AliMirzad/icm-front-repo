// UserDetailModal.js
import React from "react";

const ModalInfo = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white shadow-md rounded-lg p-6 w-4/5 flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          User Details
        </h2>

        {/* two line */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{`${user.fname} ${user.lname}`}</h2>
            <p>{user.role}</p>
          </div>
          <div>
            <img
              src={user.image.length > 0 ? user.image : "default-image-url.jpg"}
              alt={`${user.fname} ${user.lname}`}
              className="rounded-full w-[200px] h-[200px]"
            />
          </div>
        </div>
        {/* three  */}
        <div>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
        {/* foue */}

        <div className="border-t border-gray-300 mt-4 pt-4">
          <h3 className="text-lg font-semibold mb-2">{user.address}</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;


