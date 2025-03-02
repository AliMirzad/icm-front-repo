import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, onPageChange,recoder,number,nPage,currentPage ,dataPerPage,handleNext,handlePrev,handlePageClick}) => {
//   const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className="flex justify-center mt-[2px] p-3 bg-white">
      <ul className="flex flex-row-reverse list-none gap-0   rounded-xl ">
        {/* Previous Button */}
        <li
          className={`px-3 py-2 border rounded-l-xl bg-blue-500 transition-all duration-300 cursor-pointer ${
            currentPage === 1 ? "bg-blue-500 text-white text-bold opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          onClick={handlePrev}
        >
          صفحه‌ی قبل
        </li>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i}
            className={`px-3 py-2 border cursor-pointer transition-all duration-300 ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </li>
        ))}

        {/* Next Button */}
        <li
          className={`px-3 py-2 border rounded-r-xl bg-blue-500 transition-all duration-300 text-white text-bold cursor-pointer ${
            currentPage === totalPages ? "bg-blue-600 opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          onClick={handleNext}
        >
          صفحه‌ی بعد
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
