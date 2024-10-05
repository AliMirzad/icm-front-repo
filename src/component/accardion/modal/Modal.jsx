import { useState } from "react";
 const Modal = ({ isOpen, onClose, onSubmit, sectionTitle }) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Add New {sectionTitle}</h2>
          <input
            type="text"
            placeholder="Input 1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="text"
            placeholder="Input 2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-gray-300 px-4 py-2 mr-2">
              Cancel
            </button>
            <button onClick={() => onSubmit({ input1, input2 })} className="bg-blue-500 text-white px-4 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default Modal