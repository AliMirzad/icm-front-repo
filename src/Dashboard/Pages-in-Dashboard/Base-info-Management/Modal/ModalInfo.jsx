import React, { useState } from "react";
import Modal from '../../../../component/modal/Modal'
import { div } from "framer-motion/client";

const ModalInfo = ({ isOpen, onClose, title, content }) => {
  const [open,setOpen]=useState(isOpen)
const handleClose=()=>{
  setOpen(()=>!isOpen)
}
  return (
    // <Modal isOpen={isOpen} onClose={onClose} title={title}>
    //   <pre>{JSON.stringify(content, null, 2)}</pre>
    // </Modal>
    // <div className={`w-[800px] h-[600px] absolute inset-0 m-auto transition-all duration-300 origin-top bg-rose-500 ${open? `scale-100`:`scale-0`}`}>
    //     <span className="absolute top-3 right-3 text-[24px] cursor-pointer" onClick={handleClose} >&times;</span>
    // </div>
    <></>
  );
};

export default ModalInfo;
