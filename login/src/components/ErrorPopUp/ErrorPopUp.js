import { AiOutlineCloseCircle } from "react-icons/ai"; // Example SVG icon
import * as style from "../StyleCss"; // Assuming you have styles defined
import { IoIosClose } from "react-icons/io";

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className={style.popupContainer}>
      <div className={style.popup}>
        <AiOutlineCloseCircle className={style.errorIcon} /> {/* SVG Icon */}
        <p className={style.errorMessage}>{message}</p>
        <button className={style.closeButton} onClick={onClose}>
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
