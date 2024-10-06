import { useState } from "react";
import Menu from "../Menu/Menu";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroLogo from "../HeroLogo";
const Hero = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { scrollY } = useScroll();
  let hideHeroLeft = useTransform(
    scrollY,
    [0, 300, 400, 500],
    ["100vh", "70vh", "40vh", 0]
  );
  let hideHeroRight = useTransform(
    scrollY,
    [0, 300, 400, 500],
    ["100vh", "100vh", "40vh", 0]
  );
  const textHide = {
    hide: { opacity: 0, y: "100%" },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className="w-full h-screen relative  flex justify-center items-center">
      <Menu />
      <motion.div
        variants={{
          hide: { height: 0 },
          show: { height: "100vh" },
        }}
        initial="hide"
        animate="show"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex-1 h-full bg-blue-600 bg-fixed"
        style={{ height: hideHeroRight }}

      ></motion.div>
      <motion.div
        variants={{
          hide: { height: 0 },
          show: { height: "100vh" },
        }}
        initial="hide"
        animate="show"
        transition={{ duration: 0.75 }}
        className="flex-1 h-full bg-blue-700 bg-fixed bg-center"
        style={{ height: hideHeroLeft }}
      ></motion.div>
      <motion.div className="w-[540px] h-[450px] z-[10] absolute  inset-0 m-auto text-white font-bold flex flex-col gap-y-[10px]  overflow-hidden  text-[60px]">
        <motion.div className=" w-full h-[80px]">
          <motion.p
            variants={textHide}
            transition={{ duration: 0.5, delay: 1.25 }}
            initial="hide"
            animate="show"
          >
            طراحی
          </motion.p>{" "}
        </motion.div>
        <div className=" w-full h-[80px]">
          <motion.p
            variants={textHide}
            transition={{ duration: 0.5, delay: 1.5 }}
            initial="hide"
            animate="show"
          >
            محصولات
          </motion.p>
        </div>
        <div className=" w-full h-[80px]">
          <motion.p
            variants={textHide}
            transition={{ duration: 0.5, delay: 1.75 }}
            initial="hide"
            animate="show"
          >
            دیجیتال
          </motion.p>
        </div>
        <div className=" w-full h-[80px]">
          <motion.p
            variants={textHide}
            transition={{ duration: 0.5, delay: 2 }}
            initial="hide"
            animate="show"
          >
            برای فکرهای{" "}
          </motion.p>
        </div>
        <div className=" w-full h-[80px]">
          <motion.p
            variants={textHide}
            transition={{ duration: 0.5, delay: 2.25 }}
            initial="hide"
            animate="show"
          >
            بزرگ
          </motion.p>
        </div>
      </motion.div>
      <div className="w-[100%]   h-[90%] bottom-[10px]   end-0 flex justify-center  absolute">
        <HeroLogo />
      </div>
    </motion.div>
  );
};

export default Hero;
