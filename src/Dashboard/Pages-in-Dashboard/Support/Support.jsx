import React, { useState } from "react";
import SupportModal from "./supportModal/SupportModal";
import pic from "../../../image/hosein.jpg";
export const Support = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  h-4/5 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-600 p-6 mt-3 mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center relative">
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

      <SupportModal isOpen={isModalOpen} onClose={handleModalToggle} />

      <div className="mt-6 text-center text-white">
        <p>راهنمایی‌ها:</p>
        <ul className="list-disc list-inside">
          <li>برای سوالات فوری، از ایمیل ما استفاده کنید.</li>
          <li>سوالات خود را به طور واضح بیان کنید.</li>
          <li>توجه داشته باشید که پاسخ‌ها ممکن است کمی زمان‌بر باشند.</li>
        </ul>
      </div>
    </div>
  );
};
