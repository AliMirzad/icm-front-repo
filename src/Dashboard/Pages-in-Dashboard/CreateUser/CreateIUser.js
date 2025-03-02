import { useState } from "react";
import Input from "../../../component/input/Input";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../../Api/addUserApi/addUserApi";
import ErrorPopUp from "../../../component/ErrorPopUp/ErrorPopUp";

const CreateUser = () => {
  const [focusState, setFocusState] = useState({
    userName: false,
    password: false,
    email: false,
    firstName: false,
    lastName: false,
    birthDay: false,
    genderId: false,
    locationId: false,
    address: false,
    postalCode: false,
    phoneNumber: false,
    idCode: false,
    companyId: false,
  });
  const [hidden, setHidden] = useState({
    userName: false,
    password: false,
    email: false,
    firstName: false,
    lastName: false,
    birthDay: false,
    genderId: false,
    locationId: false,
    address: false,
    postalCode: false,
    phoneNumber: false,
    idCode: false,
    companyId: false,
  });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [modal,setModal]=useState(true)
  const handleClose = () => {
      setModal(true)
    setError(null)
      }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    console.log(data);
    let response=await addUser(data.username, data.password,data.firstName,data.lastName,data.phoneNumber,data.genderId,data.postalCode,data.email,data.locationId,data.birthDay,data.idCode,data.addUser,data.companyId);
    try {
      
      setError(null);
      navigate("/dashboard");
    } catch (response) {
      e.preventDefault();
      console.log(response.error[0]);

      setError(response.message);
      setSubmit(false);
    }
  };
  const handleFocus = (e) => {
    const { name, value } = e.target;
    setFocusState((prev) => ({
      ...prev,
      [name]: true,
    }));
    if (value !== "") {
      setHidden((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusState((prev) => ({
      ...prev,
      [name]: false,
    }));
    if (value !== "") {
      setHidden((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen  ">
      <form
       onSubmit={handleSubmit}
        className="p-2 pt-10 w-[80%]  flex justify-between items-start gap-y-8 flex-wrap"
      >
        {/* Username Input */}
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.userName ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.userName ? "opacity-0" : "opacity-100"
            } `}
          >
            نام کاربری
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "userName" }}
          />
        </div>

        {/* Password Input */}
        <div className="w-[48%] rounded-lg relative p-2  border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.password ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.password ? "opacity-0" : "opacity-1"
            }`}
          >
            رمزعبور
          </span>
          <Input
            type={"password"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={true}
            onBlur={handleBlur}
            inp={{ name: "password" }}
            id={"password"}
            svgStyle={"absolute top-[8px] left-[5px] fill-[#2a2185] z-[100]"}
          />
        </div>

        {/* Email Input */}
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.email ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.email ? "opacity-0" : "opacity-1"
            }`}
          >
            ایمیل
          </span>
          <Input
            type={"email"}
            name={"email"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "email" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.firstName ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.firstName ? "opacity-0" : "opacity-1"
            }`}
          >
            نام
          </span>
          <Input
            type={"text"}
            name={"firstName"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "firstName" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.lastName ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.lastName ? "opacity-0" : "opacity-1"
            }`}
          >
            نام خانوادگی
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "lastName" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.birthDay ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.birthDay ? "opacity-0" : "opacity-1"
            }`}
          >
            تاریخ تولد
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "birthDay" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.genderId ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.genderId ? "opacity-0" : "opacity-1"
            }`}
          >
            شناسه جنسیت
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "genderId" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.locationId ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.locationId ? "opacity-0" : "opacity-1"
            }`}
          >
            شناسه جغرافیا
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "locationId" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.address ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.address ? "opacity-0" : "opacity-1"
            }`}
          >
            آدرس
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "address" }}
          />
        </div>

        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.postalCode ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.postalCode ? "opacity-0" : "opacity-1"
            }`}
          >
            کدپستی
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "postalCode" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.phoneNumber ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.phoneNumber ? "opacity-0" : "opacity-1"
            }`}
          >
            شماره تلفن
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "phone number" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.idCode ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.idCode ? "opacity-0" : "opacity-1"
            }`}
          >
            کد ملی
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "idCode" }}
          />
        </div>
        <div className="w-[48%] rounded-lg relative p-2 border-[#2a2185] border-solid border-[1px]">
          <span
            className={`text-[#2a2185] text-[14px] absolute ${
              focusState.companyId ? "top-[-50%]" : "top-[9.5px]"
            } transition-all duration-300 right-5 ${
              hidden.companyId ? "opacity-0" : "opacity-1"
            }`}
          >
            کد شرکت
          </span>
          <Input
            type={"text"}
            className={
              "bg-transparent w-full outline-none border-0 relative z-50 top-0 right-0"
            }
            onFocus={handleFocus}
            hasIcon={false}
            onBlur={handleBlur}
            inp={{ name: "companyId" }}
          />
        </div>
        <div className="w-full flex justify-end">
          <Input
            type={"submit"}
            inp={{ value: "ثبت", name: "submit" }}
            className={
              " text-[#2a2185] rounded-sm border-[1px] border-solid border-[#2a2185] px-[60px] cursor-pointer py-[15px] bg-transparent hover:text-white hover:bg-[#2a2185] transition-all duration-300 block "
            }
          />
        </div>
      </form>
      <ErrorPopUp error={error} handleClose={handleClose} modal={modal} />

    </div>
  );
};

export default CreateUser;
