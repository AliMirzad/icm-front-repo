import { GetUser } from "../../../Api/UserApi/GetUser";
import hos from "../../../images/hosein.jpg";
import male from "../../../../src/images/male.jpg";
import female from "../../../../src/images/female.avif";
import { useEffect, useState } from "react";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import CircleLoader from "react-spinners/CircleLoader";

const ProfileUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const { userId } = useAuth();
  const [loader,setLoader]=useState(true)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await GetUser(userId); // Fetch menu data
        setDataUser(data); // Store data in state
      } catch (error) {
        console.error("Error fetching menu:", error);
      }finally{
        setLoader(false)
      }
    };
    fetchUser();
  }, []);
  console.log(dataUser);

  return (
    <>
      
     {setLoader===true?<div className="w-full h-full flex justify-center items-center">
    <CircleLoader size={150} color="#2563eb"/>
      </div>: <div className="flex  justify-center  w-full items-center h-full  bg-gray-200 mx-auto">
        <div className="w-4/5 flex flex-col justify-center gap-[20px] h-full  ">
         
          <div className="w-full p-3 flex gap-3 flex-row-reverse justify-start items-center rounded-md shadow-md bg-white">
            <div className="rounded-[50%]  items-center overflow-hidden border-1 border-solid border-[#2b2b2b]">
              <img
                src={
                 dataUser.genderId===1?male:female
                }
                alt=""
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
            <div  >
              <p className="text-[#2a2185] text-[24px] text-bold" >{`${dataUser.firstName}${dataUser.lastName}`}</p>
              <p className="text-black flex flex-row-reverse text-[18px] text-start text-bold">{dataUser.exactLocation}</p>
            </div>
          </div>
          <div className=" rounded-md p-3 flex flex-col gap-y-5   shadow-md bg-white">
            <h2 className="text-[18px] shadow-shadow-line py-3 text-[#2a2185]">اطلاعات پایه</h2>
            <div className="w-full  gap-2 grid grid-cols-3">
              <div className="w-full p-3 ">
                <p className="text-gray-500">نام کاربری</p>
                <p className="text-black">{dataUser.username}</p>
              </div>
              <div className="w-full p-3 ">
                <p className="text-gray-500">نام</p>
                <p className="text-black">{dataUser.firstName}</p>
              </div>
              <div className="w-full p-3 ">
                <p className="text-gray-500">نام خانوادگی</p>
                <p className="text-black">{dataUser.lastName}</p>
              </div>

              <div className="w-full p-3 ">
              <p className="text-gray-500">ایمیل</p>
              <p className="text-black">{dataUser.email}</p>
              </div>
              <div className="w-full p-3 ">
              <p className="text-gray-500">جنسیت</p>
              <p className="text-black">{dataUser.genderId===1?"مرد":"زن"}</p>
              </div>
              <div className="w-full p-3 ">
              <p className="text-gray-500">شماره تلفن</p>
              <p className="text-black">{dataUser.phone}</p>
              </div>
              <div className="w-full p-3 ">
              <p className="text-gray-500"> تاریخ تولد</p>
              <p className="text-black">{dataUser.birthDate}</p>
              </div>
            </div>
          </div>
          <div className=" rounded-md p-3 flex flex-col gap-y-5    shadow-md bg-white">
            <h2 className="text-[24px] text-[#2a2185] shadow-shadow-line py-3"> آدرس</h2>
            <div className="w-full  gap-2 grid grid-cols-3">
              <div className="w-full p-3 ">
                <p className="text-gray-500"> آدرس</p>
                <p className="text-black">{dataUser.exactLocation}</p>
              </div>
              <div className="w-full p-3 ">
                <p className="text-gray-500">کد پستی</p>
                <p className="text-black">{dataUser.postalCode}</p>
              </div>
              <div className="w-full p-3 ">
                <p className="text-gray-500">نام خانوادگی</p>
                <p className="text-black">{dataUser.lastName}</p>
              </div>

            
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default ProfileUser;
