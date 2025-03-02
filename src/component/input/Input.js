import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
const Input = ({
  id,
  labelText,
  inp,
  className,
  inputWraper,
  error,
  handle,
  handleBlur,
  handleKeyUp,
  type,
  parentWraper,
  svgStyle,
  onFocus,
  hasIcon,
  onBlur,
  onChange
  
}) => {
  const [shouwPassWord, setShowPassword] = useState(false);
  const hadleChangeIcon = (e) => {
    setShowPassword((a) => !a);
  };
  return (
    <div className={parentWraper}>
      {type !== "checkBox" && type !== "submit" ? (
        <>
          <input
            id={id}
            {...inp}
            type={
             type==="password"?shouwPassWord?"text":"password":type
            }
            className={className}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
          />
          {hasIcon === true ? (
            <>
              {id === "password" ? (
                <>
                  {shouwPassWord === true ? (
                    <VscEyeClosed
                      onClick={hadleChangeIcon}
                      fill="white"
                      className={svgStyle}
                    />
                  ) : (
                    <VscEye
                      onClick={hadleChangeIcon}
                      fill="white"
                      className={svgStyle}
                    />
                  )}
                </>
              ) : (
                <CiUser fill="white" className={svgStyle} />
              )}
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {type !== "submit" ? (
            <label htmlFor={id} className="text-white text-[14px] ">
              {labelText}{" "}
            </label>
          ) : (
            ""
          )}
          <input
            id={id}
            {...inp}
            type={type}
            className={className}
            onFocus={onFocus}
          />
        </>
      )}
    </div>
  );
};

export default Input;
/*
   {type !== "checkbox" ? (
        <>
          
          {inp?.type === "password" ? (
            <div className=" text-white" onClick={chnageIcon}>
              {inp?.type === "password" && type === "password" ? (
                <VscEye />
              ) : (
                <VscEyeClosed />
              )}
            </div>
          ) : (
            // <CiUser className="text-white" />
          )}
        </>
      ) : (
        <>
          
        </>
      )}

*/
