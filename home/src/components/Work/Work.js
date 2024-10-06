import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import Arrow from "../Arrow";
import { useEffect, useRef, useState } from "react";
const Work = ({ sendDataToParent }) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          setIsInView(isVisible);
          sendDataToParent(isVisible);
        });
      },
      {
        threshold: 0.5, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [sendDataToParent]); 
  const data = [
    {
      id: 1,
      title: "برنامه نویسی با بروزترین برنامه",
      text: "تیم طراحی ui",
      image: pic1,
    },
    {
      id: 2,
      title: "برنامه نویسی با بروزترین برنامه",
      text: "تیم طراحی وب",
      image: pic2,
    },
    {
      id: 3,
      title: "برنامه نویسی با بروزترین برنامه",
      text: "تیم طراحی ui",
      image: pic3,
    },
    {
      id: 4,
      title: "طراحی لوگو",
      text: "تیم طراحی ui",
      image: pic4,
    },
  ];

  return (
    <div
      ref={elementRef}
      className="w-full  mt-[50px] flex  justify-center items-center flex-wrap h-[800px] bg-transparent"
    >
      <h2 className="w-2/3 text-[40px] font-bold text-white items-center flex justify-between">هدف‌ها <Arrow/></h2>
      <div className="w-2/3 h-[500px]  slider overflow-auto scrollbar-thin scrollbar-thumb-orange-50 scrollbar-thumb-rounded-md slider">
        {data.map((elem, index) => {
          return (
            <>
              <div
                key={index}
                className="w-1/2 flex justify-start h-full  sticky top-0    items-center"
              >
                <img
                  src={elem.image}
                  className="w-full h-full  object-cover"
                  alt=""
                />
              </div>
              <div
                key={elem.id + "text"}
                className={
                  elem.id !== 4
                    ? "w-1/2 h-full relative end-[-50%] top-[-100%]  flex justify-center   items-center "
                    : "w-full  h-full sticky end-[-100%] top-0  flex justify-end items-center "
                }
              >
                <div className="w-[40%] flex flex-col gap-y-[30px]  text-white">
                  <h3 className="text-[40px]">{elem.title}</h3>
                  <p className="text-[20px] text-[#D9D9D9]">{elem.text}</p>
                  <div
                    className={
                      elem.id !== 4
                        ? "w-full flex justify-start gap-[11px] items-center text-[14px] "
                        : "w-[40%] flex justify-start gap-[11px] items-center text-[14px] "
                    }
                  >
                    بیشتر
                    <Arrow veiw={isInView} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;

/*
     {
            index === 0 && (
              <div className="w-full flex justify-start h-full  sticky top-0    items-center">
                {elem.map((item, index) => {
                  <img
                    key={index}
                    src={item}
                    alt=""
                    className="w-1/2 h-full  object-cover"
                  />;
                })}
              </div>
            );
          }
*/
