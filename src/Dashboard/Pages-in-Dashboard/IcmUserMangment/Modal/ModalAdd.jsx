import { useEffect, useState } from "react";
import ErrorPopUp from "../../../../component/ErrorPopUp/ErrorPopUp";
import Input from "../../../../component/input/Input";
import CircleLoader from "react-spinners/CircleLoader";
import getAllContentType from "../../../../Api/BaseInfoApi/getAllContentType";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  adduser  from "../../../../Api/icmUserMangmentApi/adduser";

const ModalAdd = ({ options, ModalAdd, setAddModal, locationFold }) => {
  const [contentType, setContentType] = useState([]);
  const [submit, setSubmit] = useState([]);
  const [gender, setGender] = useState([]);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const [sucess, setSucess] = useState(null);
  const [close, setClose] = useState(false);
  console.log(locationFold);
  const genderId = async () => {
    const genderId = await axios.get(
      "http://5.34.206.81:8080/icm/baseInfo/v1/getGenderTypes"
    );

    setGender(genderId.data);
  };
  console.log(gender);

  const handleClose = () => {
    setModal(true);
    setError(null);
  };
  const closeModal = () => {
    setAddModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    
  
    
    try {
      e.preventDefault();
      await adduser(
        data.username.trim(),
        data.password.trim(),
        data.firstName.trim(),
        data.lastName.trim(),
        data.email.trim(),
        data.phone.trim(),
        data.birthDate.trim(),
        +data.locationInfoId,
        +data.genderId,
        data.exactLocation.trim(),
        data.postalCode.trim(),
        data.nationalCode.trim(),
        +data.companyId
      );
      setSucess("تایپ با موفقیت اضافه شد");
      setModal(false);
      setError(null);
    } catch (err) {
      e.preventDefault();
      console.log(
        data.username.trim(),
        data.password.trim(),
        data.firstName.trim(),
        data.lastName.trim(),
        data.email.trim(),
        data.phone.trim(),
        data.birthDate.trim(),
        +data.locationInfoId,
        +data.genderId,
        data.exactLocation.trim(),
        data.postalCode.trim(),
        data.nationalCode.trim(),
        +data.companyId
      );

      setError(err.message);
      setSubmit(false);
    }
  };

  useEffect(() => {
    const getContentType = async () => {
      try {
        const data = await getAllContentType();
        setContentType(data);
      } catch (error) {
        console.log(error);
      }
    };

    getContentType();
    genderId();
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
        className="flex flex-wrap w-1/2  inset-0 m-auto gap-5 justify-start items-center bg-white p-4"
        onSubmit={handleSubmit}
      >
        <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
          <Input
            type={"text"}
            className={
              "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
            }
            hasIcon={false}
            inp={{ name: "username", placeholder: "نام کاربری" }}
            parentWraper={"w-full h-full "}
          />
        </div>

        <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
          <Input
            type={"password"}
            className={
              "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
            }
            hasIcon={true}
            inp={{ name: "password", placeholder: "رمز عبور" }}
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
            inp={{ name: "firstName", placeholder: "نام " }}
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
            inp={{ name: "lastName", placeholder: " نام خانوادگی" }}
            parentWraper={"w-full h-full "}
          />
        </div>
        <select
          name="genderId"
          className="w-[48%] text-[#2a2185] bg-transparent outline-none rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] h-[40px]"
        
          onClick={(e) => handleSelectedOption(e.target.value)}
        >
          {gender ? (
            gender.map((elem, index) => {
              return (
                <option key={index} value={elem.id}>
                  {elem.id}
                </option>
              );
            })
          ) : (
            <CircleLoader />
          )}
        </select>
        {/* fold */}
        <select
          name="locationInfoId"
          className="w-[48%] text-[#2a2185] bg-transparent outline-none rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] h-[40px]"
        
          onClick={(e) => handleSelectedOption(e.target.value)}
        >
          {locationFold ? (
            locationFold.map((elem, index) => {
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
            hasIcon={false}
            inp={{ name: "exactLocation", placeholder: "آدرس" }}
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
            inp={{ name: "postalCode", placeholder: "کدپستی" }}
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
            inp={{ name: "companyId", placeholder: "شناسه شرکت" }}
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
            inp={{ name: "birthDate", placeholder: "تاریخ تولد" }}
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

export default ModalAdd;
