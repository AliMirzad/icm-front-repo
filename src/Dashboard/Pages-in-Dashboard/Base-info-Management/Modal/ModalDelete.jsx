import React, { useEffect, useState } from "react";
import Modal from "../../../../component/modal/Modal";
import deleteType from "../../../../Api/BaseInfoApi/deleteType";
import { Link, useNavigate } from "react-router-dom";
const ModalDelete = ( {id,showDelteModalFn,reloadFn,showDelteModal} ) => {
  let [data, setData] = useState([]);
  console.log(data);
  
  const navigate = useNavigate();
  let [massage,setMassage]=useState("")
  
  
  const deletTypeMang = async () => {
    try {
      let response = await deleteType(id);
      let data=await response.data
      setData(data);
      
      setMassage(data.responseMessage)
      
    } catch (err) {
      console.log(err);
    }
  };

const handleCloseModal=()=>{
  showDelteModalFn(false)
  reloadFn()
}


  return (
    // <Modal isOpen={isOpen} onClose={onClose} title={title}>
    //   <div>
    //     <p>آیا مطمئن هستید که می‌خواهید این مورد را حذف کنید؟</p>
    //     <pre>{JSON.stringify(content, null, 2)}</pre>
    //     <button
    //       onClick={onConfirmDelete}
    //       className="bg-red-500 text-white p-2 rounded mt-4"
    //     >
    //       Confirm Delete
    //     </button>
    //   </div>
    // </Modal>
    <div className={`  inset-0 absolute items-center  text-center bg-black bg-opacity-50 z-[99999] `}>
      <div className="bg-white rounded-lg flex justify-center items-center flex-col absolute inset-0 m-auto w-[500px] h-[300px] p-6 transform transition-transform duration-300 scale-95 hover:scale-100">
      {massage?<h3 className="text-lg font-semibold mb-4 text-red-600">{massage}</h3>:<>
        <h3 className="text-lg font-semibold mb-4 text-red-600">حذف ایتم</h3>
        <p className="mb-6 text-gray-700">آیا از حذف این ایتم مطمین هستنید ؟</p>
      </>}
        <div className="flex justify-center  gap-5 space-x-4">
        {massage?<Link onClick={handleCloseModal} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
            بازگشت
          </Link>:<>
          <button onClick={handleCloseModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200">
            خیر
          </button>
          <button onClick={deletTypeMang} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
            بله
          </button>
        </>}
        </div>
      </div>
      
    </div>
  );
};

export default ModalDelete;
