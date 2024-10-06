import { motion, useAnimation, useInView } from "framer-motion";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import { useEffect, useRef } from "react";
import Arrow from "../Arrow";

const Tech = () => {
  const data = [image1, image2, image3, image4];
  const parentRef = useRef(null); 
  const controls = useAnimation();
  const secondControls = useAnimation();
  const inView = useInView(parentRef, { triggerOnce: true, amount: 0.5 }); 

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.3,
        },
      }));
      secondControls.start(() => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 1.5,
        },
      }));
    }
  }, [inView, controls, secondControls]);

  return (
    <div className="w-full p-5 relative h-[900px]" ref={parentRef}>
      <div className="w-full flex justify-center gap-x-[36px] items-start">
        {data.map((elem, index) => {
          return (
            <motion.img
              src={elem}
              className=""
              key={index}
              alt=""
              custom={index}
              animate={controls}
              initial={{ opacity: 0, y: -100 }}
            />
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={secondControls}
        className="flex flex-col items-start p-[40px] absolute start-20 bottom-[15px] bg-white justify-start gap-y-[20px] rounded-[16px] shadow-[0px_1px_48px_rgba(0,0,0,0.05)]"
      >
        <h2 className="text-[40px] text-[#19192E]">
          تکنیکس و هوش مصنوعی
        </h2>
        <p className="text-[16px] w-[550px]">
          به عنوان یک طراح گرافیک، ممکن است در مورد هوش مصنوعی (AI) و تأثیر آن
          روی کار گرافیست‌ها شنیده باشید. هوش مصنوعی این پتانسیل را دارد که با
          بهینه و خلاقانه‌تر کردن فرآیند طراحی، شیوه کار شما را متحول کند. در
          این مقاله، ما نحوه کمک هوش مصنوعی به گرافیست‌ها را بررسی می‌کنیم.
        </p>
        <div className="flex justify-start gap-[20px] stroke-[#19192E] text-[#19192E] text-[20px] items-center w-full">
          بیشتر
          <Arrow color={"#19192E"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
