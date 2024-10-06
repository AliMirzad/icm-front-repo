import { ReactNode, useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { normalBorder } from "../StyleCss";

const Input = ({ id, labelText, inp, className, inputWraper, error }) => {
  const [value, setValue] = useState(inp?.value || "");
  const [type, setType] = useState(inp?.type || "text");
  const [longValue, setLangValue] = useState(false);

  function chnageIcon() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }
  function handleFocus(e) {
    if (e.target.value.length === 50 && e.target.type !== "password") {
      setLangValue(true);
    }
  }
  function handleKeyUp(e) {
    
    if (e.target.value.length === 50 && e.target.type !== "password") {
      setLangValue(true);
    } else {
      setLangValue(false);
    }
  }
  const isLess = value.length < 3 && value.length !== 0;

  return (
    <div className={isLess ? inputWraper + error : inputWraper + normalBorder}>
      {type !== "checkbox" ? (
        <>
          <input
            id={id}
            {...inp}
            type={type}
            onBlur={(e) => setValue(e.target.value)}
            className={className}
            onFocus={handleFocus}
            onKeyUp={handleKeyUp}
          />
          {inp?.type === "password" ? (
            <div className=" text-white" onClick={chnageIcon}>
              {inp?.type === "password" && type === "password" ? (
                <VscEye />
              ) : (
                <VscEyeClosed />
              )}
            </div>
          ) : (
            <CiUser className="text-white" />
          )}
        </>
      ) : (
        <>
          <label htmlFor={id} className="text-white text-[14px] ">
            {labelText}{" "}
          </label>
          <input
            id={id}
            {...inp}
            type={type}
            className={
              type === "checkbox"
                ? "border-0 bg-white  outline-none text-[12px]"
                : "border-0 bg-white  outline-none text-[12px] w-[90%] "
            }
          />
        </>
      )}

      {isLess ? (
        <p className="text-rose-600 text-[14px] text-start   w-[90%] ">
          طول مقدار وارد شده باید بیشتر از 3 باشد
        </p>
      ) : undefined}
      {longValue && (
        <p className="text-rose-600 text-[14px] text-start  w-full ps-2">
          طول مقدار وارد شده نباید بیشتر از 50 باشد
        </p>
      )}
    </div>
  );
};

export default Input;
