import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import FetchData from "../FetchData/FetchData";

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { scrollY } = useScroll();

  let menuPlace = useTransform(scrollY, [0, 800], [0, -200]);
  let menuTextColor = useTransform(scrollY, [0, 800], ["black", "white"]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await FetchData("header");
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <motion.div transition={{ duration: 0.5, delay: 1 }}
             
    style={{ y: menuPlace }} className="w-full fixed z-[9999999] top-0 items-start flex justify-around">
      {data.map((elem) => {
        return (
          <>
            <motion.div 
            style={{ color: menuTextColor }}
            transition={{duration:300,delay:0.5}}
            >
              {elem.logo}
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 1 }}
             
              style={{ y: menuPlace }}
            >
              <ul className="flex text-white justify-center gap-x-[70px] items-center text-[16px]">
                {elem.menu.map((item, itemIndex) => {
                  return <li key={itemIndex}>{item.text}</li>;
                })}
              </ul>
            </motion.div>
            <motion.div
              className=" text-[16px]"
              style={{ color: menuTextColor }}
            >
              {elem.text}
            </motion.div>
          </>
        );
      })}
    </motion.div>
  );
};

export default Menu;
