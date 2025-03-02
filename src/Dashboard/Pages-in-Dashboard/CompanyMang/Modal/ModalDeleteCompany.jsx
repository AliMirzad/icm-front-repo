import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteCompany from "../../../../Api/CompanyApi/deleteComapny";

const ModalDeleteCompany = ({ showDelteModalFn, id, refreshData }) => {
  let [massage, setMassage] = useState("");
console.log(id);

  const deletTypeCompany = async () => {
    try {
      let response = await deleteCompany(id);
      let data = await response;

      setMassage(data.responseMessage);

      // Refresh the data in the parent component
  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="inset-0 absolute items-center text-center bg-black bg-opacity-50 z-[99999]">
      <div className="bg-white rounded-lg flex justify-center items-center flex-col absolute inset-0 m-auto w-[500px] h-[300px] p-6">
        {massage ? (
          <h3 className="text-lg font-semibold mb-4 text-red-600">{massage}</h3>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              حذف ایتم
            </h3>
            <p className="mb-6 text-gray-700">
              آیا از حذف این ایتم مطمئن هستید؟
            </p>
          </>
        )}
        <div className="flex justify-center gap-5 space-x-4">
          {massage ? (
            <button
              onClick={() => showDelteModalFn(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              بازگشت
            </button>
          ) : (
            <>
              <button
                onClick={() => showDelteModalFn(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                خیر
              </button>
              <button
                onClick={deletTypeCompany}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                بله
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteCompany;

