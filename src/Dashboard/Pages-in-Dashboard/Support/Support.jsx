import React, { useState } from "react";
import Modal from "./Modal/Modal";
import pic from "../../../images/hosein.jpg";
import ComingSoon from "../../../component/comming-soon/ComingSoon";
export const Support = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="">
      {/* <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center relative">
        <img
          src={pic}
          alt="پشتیبان"
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: "150px", height: "150px" }} // اندازه عکس را تنظیم کنید
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">صفحه پشتیبانی</h1>
        <p className="text-gray-600 mb-6">
          اگر سوالی دارید یا به کمکی نیاز دارید، با کلیک بر روی دکمه زیر فرم
          پشتیبانی را پر کنید.
        </p>
        <button
          onClick={handleModalToggle}
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-300"
        >
          باز کردن فرم پشتیبانی
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalToggle} />

      <div className="mt-6 text-center text-white">
        <p>راهنمایی‌ها:</p>
        <ul className="list-disc list-inside">
          <li>برای سوالات فوری، از ایمیل ما استفاده کنید.</li>
          <li>سوالات خود را به طور واضح بیان کنید.</li>
          <li>توجه داشته باشید که پاسخ‌ها ممکن است کمی زمان‌بر باشند.</li>
        </ul>
      </div> */}
        <ComingSoon/>
      </div>
  );
};
