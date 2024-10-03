import Left from "../../../images/Leftside.png"
import logInPic from "../../../images/loginman.png"
const LeftSide = () => {
    return (
        <div
        className="lg:w-[410px] sm:w-1/2  h-full  hidden md:flex justify-center items-center rounded-s-[24px] bg-no-repeat bg-cover bg-center "
        style={{
          backgroundImage: `url(${Left})`,
         
        }}  
      >
          <div className=" w-[285px] h-[385px] overflow-hidden   rounded-[46px] relative bg-white bg-opacity-30 backdrop-filter backdrop-blur-[6px]   border-[1px] border-solid border-white   ">
          <div className="text-[35px] w-[100%]  text-white   rounded-[46px]    font-bold" >
        <p className="p-[15px]  w-full pb-0  ">لطفا اطلاعات خود را به‌طور دقیق وارد نمایید.</p>
          </div>
          <div className=" w-[100%] text-justify    absolute left-[-35px] bottom-[-17.5px]  rounded-[46px]   ms-auto    ">
            <img src={logInPic} className=" w-[90%] h-full  rounded-[46px]  object-cover     "  alt="loginicon" />
          </div>
          </div>

      </div>
      );
}
 
export default LeftSide;