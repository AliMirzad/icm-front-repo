import React, { useEffect, useState } from "react";
import Modal from "../../../../component/modal/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import Input from "../../../../component/input/Input";
import ErrorPopUp from "../../../../component/ErrorPopUp/ErrorPopUp";
import updateTypes from "../../../../Api/BaseInfoApi/updateType";
import getAllContentType from "../../../../Api/BaseInfoApi/getAllContentType";
import getLocation from "../../../../Api/CompanyApi/getLocation";

const ModalEditCompany = ({
id,phone,number,postalCode,locationFold,address,name
}) => {
  const [contentType, setContentType] = useState([]);
  const [submit, setSubmit] = useState([]);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const [sucess, setSucess] = useState(null);
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setModal(true);
    setError(null);
  };
  // const closeModal=()=>{
  //   setAddModal(false)
  // }
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    try {
      e.preventDefault();

      await updateTypes(
       +data.locationInfoId,
       data.exactLocation.trim(),
       data.postalCode.trim(),
       data.phone.trim(),
       data.email.trim(),


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
        const data = await getLocation();
        setContentType(data);
      } catch (error) {
        console.log(error);
      }
    };

    getContentType();
  }, [selectedType, submit]);
  console.log(selectedType);
  const handleSelectedOption = (value) => {
    setSelectedType(value);
  };
  return (
    <div
    className={`w-full flex justify-center items-center h-screen absolute top-0 left-0 bg-black/40 `}
  >
    <form
      className="flex flex-wrap w-1/2 h-[300px] inset-0 m-auto gap-5 justify-center items-center bg-white p-5"
      onSubmit={handleSubmit}
    >
      <select
        name="locationInfoId"
        className="w-[48%] text-[#2a2185] bg-transparent outline-none rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] h-[40px]"
        id=""
        onChange={(e) => handleSelectedOption(e.target.value)}
      >
        {contentType ? (
          contentType.map((elem, index) => {
            return (
              <option key={index} value={elem.code}>
                {elem.id}
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
          value={address}
          hasIcon={false}
          inp={{ name: "exactLocation", placeholder: "آدرس شرکت" }}
          parentWraper={"w-full h-full "}
          // onChange={e=>}
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
        //   onClick={closeModal}
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

export default ModalEditCompany;
