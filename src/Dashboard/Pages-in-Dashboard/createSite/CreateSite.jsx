import React, { useState } from "react";
import Modal from "./modal-for-create-site/Modal";
export const CreateSite = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [siteInfo, setSiteInfo] = useState({
    siteName: "",
    siteURL: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSiteInfo({ ...siteInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Site Information:", siteInfo);
    setIsModalOpen(false);
  };

  return (
    <div className="flex  justify-center  w-full items-center h-4/5 rounded-3xl bg-gray-100 mt-3 mx-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Create Site Page</h1>
        <p className="mb-4">
          لطفاً اطلاعات سایت خود را وارد کنید. برای ثبت درخواست، روی دکمه زیر
          کلیک کنید.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          ثبت درخواست
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          siteInfo={siteInfo}
          onInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};
