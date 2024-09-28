import { ReactNode, useState } from "react";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";

const Input = ({ children, id, labelText, inp, className,inputWraper }) => {
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
  const isLess = value.length < 3 && value.length !== 0;

  return (
    <div className={inputWraper}>
      {type !== "checkbox" ? (
        <fieldset className={className}>
          {(type !== "submit") | (type !== "checkbox") && (
            <legend
              htmlFor={id}
              className={
                type !== "checkbox"
                  ? "text-slate-600  text-start text-[14px]"
                  : "bg-white w-[40%] "
              }
            >
              {" "}
              {labelText}
            </legend>
          )}
          <input
            id={id}
            {...inp}
            type={type}
            onBlur={(e) => setValue(e.target.value)}
            className={type==="checkbox"?"border-0 bg-white  outline-none text-[12px]":"border-0 bg-white  outline-none text-[12px] w-[90%] "}
            onFocus={handleFocus}
          />
          {inp?.type === "password" && (
            <Icon
              className="text-black absolute rounded-lg eye"
              icon={
                inp?.type === "password" && type === "password"
                  ? eye
                  : eyeBlocked
              }
              onClick={chnageIcon}
            />
          )}
        </fieldset>
      ) : (
        <>
          <label htmlFor={id}>{labelText}</label>
          <input
            id={id}
            {...inp}
            type={type}
            className={className}
        
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