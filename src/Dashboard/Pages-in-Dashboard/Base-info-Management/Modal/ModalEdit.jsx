import React from "react";
import Modal from '../../../../component/modal/Modal'

const ModalEdit = ({ isOpen, onClose, title, content, onConfirmEdit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div>
        <pre>{JSON.stringify(content, null, 2)}</pre>
        {/* می‌توانید فرم ویرایش را اینجا اضافه کنید */}
        <button
          onClick={onConfirmEdit}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Confirm Edit
        </button>
      </div>
    </Modal>
  );
};

export default ModalEdit;
