// ButtonComponents.js
import React from 'react';
import { FaTrash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
export const ReadButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-500 text-white px-2 py-1 rounded ml-2 cursor-pointer"
    
  >
   <FaEye />
  </button>
);

export const EditButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-400 text-white px-2 py-1 rounded ml-2 cursor-pointer "
    >
    <CiEdit className="bg-blue-400" />
  </button>
);

export const DeleteButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
    >
   <FaTrash/>
  </button>
);
