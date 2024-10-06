import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Arrow from "../Arrow";
import blog from "../../images/blog.png";

const Blog = () => {
  const parentRef = useRef(null);
  const secondParentRef = useRef(null);

  const controls = useAnimation();
  const secondControls = useAnimation();

  const inView = useInView(parentRef, { once: true, amount: 0.3 }); 
  const secondInView = useInView(secondParentRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    }

    if (secondInView) {
      secondControls.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      });
    }
  }, [inView, secondInView, controls, secondControls]);

  return (
    <div className="w-full p-5 " ref={parentRef}>
      <div className="w-[90%] p-5  flex flex-col gap-y-[20px] mx-auto">
        <motion.div
          animate={controls}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full flex  group justify-between items-center p-[30px] h-[50px] leading-[50px] bg-white hover:shadow-lg transition-all duration-300 group"
        >
          <span >تجزیه و تحلیل کاربردی UX</span>
          <Arrow  />
        </motion.div>

        <motion.div
          animate={controls}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.75 }}
         className="w-full flex  group justify-between items-center p-[30px] h-[50px] leading-[50px] bg-white hover:shadow-lg transition-all duration-300 group"
        >
          طراح و توسعه دهنده Front-End
          <Arrow />
        </motion.div>

        <motion.div
          animate={controls}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1 }}
         className="w-full flex  group justify-between items-center p-[30px] h-[50px] leading-[50px] bg-white hover:shadow-lg transition-all duration-300 group"
        >
          طراح و توسعه دهنده Back-End
          <Arrow hidden={true} />
        </motion.div>

        <motion.div
          animate={controls}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex w-full p-5 justify-start gap-[20px] stroke-[#19192E] text-[#19192E] text-[32px] items-center mx-auto"
        >
          بیشتر
          <Arrow color={"[#19192E]"} hidden={true} />
        </motion.div>
      </div>

      <div
        className="w-[90%] mx-auto relative p-5 "
        ref={secondParentRef}
      >
        <motion.div
          className="w-2/3"
          initial={{ opacity: 0 }}
          animate={secondControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={blog} className="grayscale object-cover" alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={secondControls}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-col items-start px-[20px] absolute end-[30px] top-[45px] bg-white justify-start gap-y-[20px] rounded-[16px] shadow-[0px_1px_48px_rgba(0,0,0,0.05)] p-[40px]"
        >
          <h2 className="text-[40px] px-[20px] text-[#19192E]">
            تکنیکس و هوش مصنوعی
          </h2>
          <p className="text-[24px] px-[20px] w-[550px]">
            به عنوان یک طراح گرافیک، ممکن است در مورد هوش مصنوعی (AI) و تأثیر آن
            روی کار گرافیست‌ها شنیده باشید. هوش مصنوعی این پتانسیل را دارد که با
            بهینه و خلاقانه‌تر کردن فرآیند طراحی، شیوه کار شما را متحول کند. در
            این مقاله، ما نحوه کمک هوش مصنوعی به گرافیست‌ها را بررسی می‌کنیم.
          </p>
          <div className="flex px-[20px] justify-start gap-[20px] stroke-[#19192E] text-[#19192E] text-[32px] items-center w-full">
            بیشتر
            <Arrow color={"[#19192E]"} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
