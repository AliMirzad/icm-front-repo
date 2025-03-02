import { useEffect, useState } from "react";
import Input from "../../../../component/input/Input";
import { useNavigate } from "react-router-dom";
import addCompany from "../../../../Api/CompanyApi/addCompany";
import CircleLoader from "react-spinners/CircleLoader";
import getCompanyLocation from "../../../../Api/CompanyApi/getCompanyLocation";
import ErrorPopUp from "../../../../component/ErrorPopUp/ErrorPopUp";

const ModalAddCompany = ({ options, ModalAdd, setAddModal,locationFold }) => {
  const [contentType, setContentType] = useState([]);
  const [submit, setSubmit] = useState([]);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const [sucess, setSucess] = useState(null);
  const [close, setClose] = useState(false);
  console.log("locat is"+locationFold+"hiiiiii");

  const handleClose = () => {
    setModal(true);
    setError(null);
  };

  const closeModal = () => {
    setAddModal(false);
    navigate("/dashboard");

  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    console.log(data);
 

    try {
      e.preventDefault();

      await addCompany(
        data.name.trim(),
        data.nationalCode.trim(),
        +data.locationInfoId,
        data.exactLocation.trim(),
        data.postalCode.trim(),
        data.phone.trim(),
        data.email.trim(),
        data.hostUrl.trim()
        
      );
      setSucess("تایپ با موفقیت اضافه شد");
      setModal(false);
      setError(null);
    } catch (err) {
      e.preventDefault();

      setError(err.message);
      setSubmit(false);
    }
  };

  useEffect(() => {
    const getContentType = async () => {
      try {
        const data = await getCompanyLocation();
        setContentType(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getContentType();
  }, [ submit]);
console.log(contentType);

  return (
    <div
    className={`w-full flex justify-center items-center h-screen absolute top-0 left-0 bg-black/40 `}
  >
    <form
      className="flex flex-wrap w-1/2 h-[400px] rounded-xl inset-0 m-auto gap-5 justify-center items-center bg-white p-5"
      onSubmit={handleSubmit}
    >
      <select
        name="locationInfoId"
        className="w-[48%] text-[#2a2185] bg-transparent outline-none rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] h-[40px]"
        id=""
        // onChange={(e) => handleSelectedOption(e.target.value)}
      >
        {contentType ? (
          contentType.map((elem, index) => {
            return (
              <option key={index} value={elem.code}>
                {elem.code}
              </option>
            );
          })
        ) : (
          <CircleLoader />
        )}
      </select>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          value
          hasIcon={false}
          inp={{ name: "exactLocation", placeholder: "آدرس شرکت" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          value
          hasIcon={false}
          inp={{ name: "name", placeholder: "نام شرکت" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          hasIcon={false}
          inp={{ name: "postalCode", placeholder: "کد پستی" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          hasIcon={false}
          inp={{ name: "nationalCode", placeholder: "کدملی" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          hasIcon={false}
          inp={{ name: "phone", placeholder: "تلفن همراه" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          hasIcon={false}
          inp={{ name: "email", placeholder: "ایمیل" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
          type={"text"}
          className={
            "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
          }
          hasIcon={false}
          inp={{ name: "hostUrl", placeholder: "سایت شرکت" }}
          parentWraper={"w-full h-full "}
        />
      </div>

      <div className="w-full flex justify-start gap-x-1 flex-row">
        <Input
          type={"submit"}
          inp={{ value: "ثبت", name: "submit" }}
          className={
            " text-white rounded-md border-[1px]  bg-green-600  cursor-pointer px-4 py-2  w-[85px]  border-green-600 hover:bg-green-700 transition-all duration-300 block "
          }
        />
        <button
          type="button"
          className="text-white rounded-md bg-rose-600   cursor-pointer  border-rose-600 w-[85px] px-4 py-2  hover:bg-rose-700 transition-all duration-300 block"
          onClick={closeModal}
        >
          انصراف
        </button>
      </div>
    </form>
    <ErrorPopUp
      error={error}
      handleClose={handleClose}
      sucess={sucess}
      modal={modal}
    />
  </div>
  );
};

export default ModalAddCompany;
