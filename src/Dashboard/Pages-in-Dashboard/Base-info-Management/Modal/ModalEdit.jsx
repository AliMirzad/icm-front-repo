import React, { useEffect, useState } from "react";
import Modal from "../../../../component/modal/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import Input from "../../../../component/input/Input";
import ErrorPopUp from "../../../../component/ErrorPopUp/ErrorPopUp";
import updateTypes from "../../../../Api/BaseInfoApi/updateType";
import getAllContentType from "../../../../Api/BaseInfoApi/getAllContentType";

const ModalEdit = ({
  id,
  code,
  subType,
  title,
  priority,
  setCode,
  setSubType,
  setPriority,
  settitileItem,
  setId,
  setAddModal,
  reloadFn
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
  const hadnleComeBack=()=>{
    setAddModal(false)
    reloadFn()
  }
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
        data.code.trim(),
        +data.id,
        data.subType.trim(),
        data.title.trim(),
        +data.priority
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
        const data = await getAllContentType();
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
        className="flex flex-wrap w-1/2 h-[300px] inset-0 m-auto gap-5 justify-start items-center bg-white p-4"
        onSubmit={handleSubmit}
      >
        <select
          name="code"
          className="w-[48%] text-[#2a2185] bg-transparent outline-none rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] h-[40px]"
          id=""
          onClick={(e) => handleSelectedOption(e.target.value)}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        >
          {contentType ? (
            contentType.map((elem, index) => {
              return (
                <option key={index} value={elem.itemValue}>
                  {elem.itemValue}
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
            inp={{ name: "subType", placeholder: selectedType, value: subType }}
            parentWraper={"w-full h-full "}
            onChange={(e) => setSubType(e.target.value)}
          />
        </div>

        <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
          <Input
            type={"text"}
            className={
              "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
            }
            hasIcon={false}
            inp={{ name: "title", placeholder: "عنوان", value: title }}
            parentWraper={"w-full h-full "}
            onChange={(e) => settitileItem(e.target.value)}
          />
        </div>

        <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
          <Input
            type={"text"}
            className={
              "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
            }
            hasIcon={false}
            inp={{ name: "priority", placeholder: "اولویت", value: priority }}
            parentWraper={"w-full h-full "}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>

        <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
          <Input
            type={"text"}
            className={
              "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
            }
            hasIcon={false}
            inp={{ name: "id", placeholder: "شناسه", value: id }}
            parentWraper={"w-full h-full "}
            onChange={(e) => setId(e.target.value)}
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
            // onClick={closeModal}
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
        loadFn={hadnleComeBack}

      />
    </div>
  );
};

export default ModalEdit;
