import React from "react";
import "./table.css";

const Table = ({ headers, data }) => {
  const headerLabels = {
    username: "نام کاربری",
    firstName: "نام",
    lastName: "نام خانوادگی",
    phone: "تلفن",
    actions: "اقدامات",
    email:"ایمیل",
    position:"موقعیت شغلی",
    name:"نام و نام خانوادگی",
    address :"آدرس",
    boss:"رییس شرکت",
    status:"وضعیت"
  };

  return (
    <table className="custom-table">
      <thead>
        <tr className="text-[12px]">
          {headers.map((header, index) => (
            <th key={index}>{headerLabels[header] || header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="text-[11px] text-center" key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
