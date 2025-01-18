import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import FetchData from "../FetchData/FetchData";

const AboutUs = ({ changeColor }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await FetchData("ourstory");
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
    <div className="w-full flex justify-center mt-[420px] ">
      {data.map((elem) => {
        return (
          <div className="w-[487px] flex flex-col gap-y-[25px] " key={elem.id}>
            <h2
              className={
                !changeColor
                  ? "text-[16px] text-[#4C4C52] transition-all duration-300"
                  : "text-[16px] text-[#d4d4d5] transition-all duration-300"
              }
            >
              {elem.title}
            </h2>
            <p
              className={
                !changeColor
                  ? " text-[27px] transition-all duration-300 "
                  : " text-[27px] text-white transition-all duration-300"
              }
            >
              {elem.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUs;
