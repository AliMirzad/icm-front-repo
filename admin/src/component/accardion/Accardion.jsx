import React, { useState } from "react";
import Table from "../table/Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

const AccordionItem = ({ title, children, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 bg-white shadow-lg rounded-2xl my-6"> 
      <div
        className="flex justify-between items-center p-4 cursor-pointer transition-all duration-300 ease-in-out bg-blue-50 hover:bg-blue-200 hover:rounded-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-gray-600">{isOpen ? <GoChevronUp /> : <GoChevronDown />}</span>
      </div>
      {isOpen && (
        <div className="pl-4 flex flex-col justify-start items-start py-4 rounded-b-lg"> 
          {children}
          <div className="flex text-center justify-end w-full mt-3 ml-4">
                <button onClick={onAdd} className="bg-green-500 text-white p-2 rounded-full">
                  {/* <FaUserPlus /> */}
                  <FaPlus />

                </button>
              </div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const handleAdd = (sectionTitle) => {
    // Handle add functionality here (e.g., open a modal or navigate to add page)
    alert(`Adding to ${sectionTitle}`);
  };

  return (
    <div className="container mx-auto p-6 mt-5">
      {sections.map((section, index) => (
        <AccordionItem title={section.title} key={index} onAdd={() => handleAdd(section.title)}>
          <Table headers={section.headers} data={section.data} />
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
