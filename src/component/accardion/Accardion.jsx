import React, { useState } from "react";
import Table from "../table/Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import RegisterType from "../../Api/BaseInfoApi/RegisterType";
import registerNewTypes from "../../Api/BaseInfoApi/registerNewTypes";
import Modal from "./modal/Modal";
const AccordionItem = ({ title, children, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-white shadow-lg rounded-2xl my-6">
      <div
        className="flex justify-between items-center p-4 cursor-pointer rounded-2xl transition-all duration-300 ease-in-out bg-blue-50 hover:bg-blue-200 hover:rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-gray-600">
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div className="pl-4 flex flex-col justify-start items-start py-4 rounded-b-lg">
          {children}
          <div className="flex text-center justify-end w-full mt-3 ml-4">
            <button
              onClick={onAdd}
              className="bg-green-500 text-white p-2 rounded-full"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const handleAdd = (sectionTitle) => {
    setActiveSection(sectionTitle); // ذخیره عنوان سکشن فعلی
    setIsModalOpen(true); // باز کردن مودال
  };

  const handleSubmit = async (formData) => {
    const { input1, input2 } = formData; 
    const newUser = { field1: input1, field2: input2 }; // ساختن شیء newUser با ورودی‌ها

    switch (activeSection) {
      case "سطوح دسترسی":
        try {
          const result = await registerNewTypes(newUser);
          console.log("RegisterNewTypes Result: ", result);
        } catch (error) {
          console.error("Error in Section 1: ", error);
        }
        break;
      case "جنسیت":
        try {
          const result = await RegisterType(newUser);
          console.log("RegisterType Result: ", result);
        } catch (error) {
          console.error("Error in Section 2: ", error);
        }
        break;
      default:
        console.log("No matching section found");
    }
  };

  return (
    <div className="container mx-auto p-6 mt-5">
      {sections.map((section, index) => (
        <AccordionItem
          title={section.title}
          key={index}
          onAdd={() => handleAdd(section.title)} // وقتی دکمه Add زده شد
        >
          {section.data && section.data.length > 0 ? (
            <Table
              headers={section.headers}
              data={section.data}
              onEdit={section.onEdit}
              accessControl={{ read: false, edit: true, delete: true }}
              onDelete={section.onDelete}
            />
          ) : (
            <p>No data available</p>
          )}
        </AccordionItem>
      ))}

      {/* اضافه کردن مودال به صفحه */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit} // ارسال داده‌های فرم به تابع
        sectionTitle={activeSection} // ارسال عنوان سکشن به مودال
      />
    </div>
  );
};

export default Accordion;
