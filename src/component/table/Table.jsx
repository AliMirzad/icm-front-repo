import React from "react";
import "./table.css";
import { FaTrash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { ReadButton ,EditButton ,DeleteButton } from "../button/Btn";
const Table = ({ headers, data, accessControl ,onRead ,onEdit, onDelete}) => {
  const headerLabels = {
    username: "نام کاربری",
    firstName: "نام",
    lastName: "نام خانوادگی",
    phone: "تلفن",
    actions: "اقدامات",
    email: "ایمیل",
    position: "موقعیت شغلی",
    name: "نام و نام خانوادگی",
    address: "آدرس",
    boss: "رییس شرکت",
    status: "وضعیت",
    title: "عنوان",
    id: "شناسه",
  };

  return (
    <table className="custom-table">
      <thead>
        <tr className="text-[12px]">
          {headers.map((header, index) => (
            <th key={index}>{headerLabels[header] || header}</th>
          ))}
          <th>اقدامات</th> 
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="text-[11px] text-center" key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex}>{row[header]}</td>
            ))}
            <td>
              <ReadButton
                onClick={() => onRead(row)} 
                disabled={!accessControl.read}
              />
              <EditButton
                onClick={() => onEdit(row)}
                disabled={!accessControl.edit}
              />
              <DeleteButton
                onClick={() => onDelete(row)}
                disabled={!accessControl.delete}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
