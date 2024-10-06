import g1 from "../../images/g1.png";
import g2 from "../../images/g2.png";
import g3 from "../../images/g3.png";

const Goals = () => {
  const data = [
    {
      id: 1,
      title: "خلاقیت و عملکرد",
      text: "انعطاف پذیری و عملگرا بودن کلید اصلی ماست.ما به طور مستقل و مستقیما با شما در ارتباط هستیم وشما مستقیما با ماکار خواهید کرد.شما میتوانید در هر زمان با ما تماس بگیرید.",
      logo: "",
    },
    {
      id: 2,
      title: "اهداف",
      text: "باز طراحی محصولات طراحی نقشه مشتریان همسویی با ذینفعان تسهیلات کارگاهی",
      logo: g1,
    },
    {
      id: 3,
      title: "طراحی",
      text: "مفهوم سازی محصول قابل دوام تعامل وطراحی بصری انواع پروتوتایپ",
      logo: g2,
    },
    {
      id: 4,
      title: "ارسال",
      text: "انعطاف پذیری و عملگرا بودن کلید اصلی ماست.ما به طور مستقل و مستقیما با شما در ارتباط هستیم وشما مستقیما با ماکار خواهید کرد.شما میتوانید در هر زمان با ما تماس بگیرید.",
      logo: g3,
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-start items-center h-[400px]">
      <div className="flex-1 h-full flex justify-start overflow-auto scrollbar-hide flex-col items-center">
        {data.map((elem) => {
          if (elem.id !== 1) {
            return (
              <div
                key={elem.id}
                className="w-[420px] flex flex-col gap-y-[35px]"
              >
                <img
                  src={elem.logo}
                  className="w-[80px] mt-[30px] object-cover"
                  alt=""
                />
                <h2 className="text-[40px] text-[#19192E] gap-y-[30px] w-[220px]">
                  {elem.title}
                </h2>
                <p className="text-[#19192E] text-[24px]">{elem.text}</p>
                <hr className="w-full bg-[#8C8B8B] border-[#8C8B8B]" />
              </div>
            );
          }
        })}
      </div>
      <div className="flex-1 flex justify-center items-center h-full">
        {data.map((elem) => {
          if (elem.id === 1) {
            return (
              <div
                key={elem.id}
                className="w-[420px] flex flex-col gap-y-[15px]"
              >
                <span>خدمات</span>
                <h2 className="text-[40px] text-[#19192E] w-[220px]">
                  {elem.title}
                </h2>
                <p className="text-[#19192E] text-[24px]">{elem.text}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Goals;
