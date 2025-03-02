import CircleLoader from "react-spinners/CircleLoader";
import Input from "../../../../component/input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getUserById from "../../../../Api/UserApi/getCompanyById";
import ErrorPopUp from "../../../../component/ErrorPopUp/ErrorPopUp";
import registerActivePlan from "../../../../Api/CompanyApi/registerActivePlan";

const ModalSub = ({ id, plan,setAddModal }) => {
  const [contentType, setContentType] = useState("");
  const [submit, setSubmit] = useState([]);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const [sucess, setSucess] = useState(null);
  const [close, setClose] = useState(false);
  console.log(plan);
  
  const handleClose = () => {
    setModal(true);
    setError(null);
    setAddModal(false)

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    console.log(data);
    
    try {
      e.preventDefault();

      await registerActivePlan(
        +data.companyId,+data.subscriptionPlanId
      );
      setSucess("تایپ با موفقیت اضافه شد");

      setModal(false);
      setError("");
    } catch (err) {
      e.preventDefault();

      setError(err.message);
      setSubmit(false);
    }
  };
  console.log("is "+contentType);
console.log(id);

  useEffect(() => {
    const getId = async () => {
      try {
        const data = await getUserById(id);
        console.log(data);
        
        setContentType(data.id)
        
        // let res=await data
        // setContentType(res);
      } catch (error) {
        console.log(error);
      }
    };

    getId();
  }, []);
  console.log(contentType);
  
  console.log(selectedType);
  const handleSelectedOption = (value) => {
    setSelectedType(value);
  };
  return (
    <div
      className={`w-full flex justify-center gap-0 items-center flex-col h-screen absolute top-0 left-0 bg-black/40 `}
    >
     <div className="w-1/2 bg-white h-[300px] p-5 flex flex-col ">
     <form
        className="flex flex-wrap w-full  inset-0 m-auto gap-5 justify-start items-center bg-white p-4"
        onSubmit={handleSubmit}
      >
      

        <div className="w-[48%] relative h-[40px]   px-[20px]   rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] overflow-hidden text-[#2a2185] ">
        <Input
                  type={"text"}
                  className={
                    "bg-transparent placeholder:text-[#2a2185] h-full w-full outline-none relative "
                  }
                  hasIcon={false}
                  inp={{
                    name: "companyId",
                    placeholder: selectedType,
                    value: contentType,
                  }}
                  parentWraper={"w-full h-full "}
                />
        </div>
        <select
          name="subscriptionPlanId"
          className="w-[48%] text-[#2a2185] bg-transparent outline-none rounded-[40px] pe-[10px] border-[#2a2185] border-solid border-[1px] h-[40px]"
          id=""
    
          onClick={(e) => handleSelectedOption(e.target.value)}

        >
          {contentType ? (
            plan.map((elem, index) => {
              return (
                <option
                  key={index}
                  value={elem.id}
                >
                  {elem.title}
                </option>
              );
            })
          ) : (
            <CircleLoader />
          )}
        </select>
        {selectedType !== null ? (
        <>
          {plan.map((elem,index) => {
            return (
              <div key={index} className="w-full flex flex-wrap justify-between p-3 ">
                <p className="flex flex-col gap-y-2">
                  <span className="text-gray-700">تاریخ شروع</span>
                  <span className="text-gray-500"> {elem.startDate}</span>
                </p>
                <p className="flex flex-col gap-y-2">
                  <span className="text-gray-700">تاریخ پایان</span>
                  <span className="text-gray-500"> {elem.endDate}</span>
                </p>
                <p className="flex flex-col gap-y-2">
                  <span className="text-gray-700"> قیمت</span>
                  <span className="text-gray-500"> {elem.price}</span>
                </p>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
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
            onClick={handleClose}
          >
            انصراف
          </button>
        </div>
      </form>
  
     </div>
      <ErrorPopUp
        error={error}
        handleClose={handleClose}
        sucess={sucess}
        modal={modal}
      />
    </div>
  );
};

export default ModalSub;
