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
  console.log(data);
  return (
    <div className="w-full flex justify-center ">
      {data.map((elem) => {
        return (
          <div className="w-[487px] " key={elem.id}>
            <h2
              className={
                !changeColor
                  ? "text-[36px] text-[#4C4C52] transition-all duration-300"
                  : "text-[36px] text-[#d4d4d5] transition-all duration-300"
              }
            >
              {elem.title}
            </h2>
            <p
              className={
                !changeColor
                  ? "mt-[25px] text-[32px] transition-all duration-300 "
                  : "mt-[25px] text-[32px] text-white transition-all duration-300"
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
