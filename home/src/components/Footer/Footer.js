import { useEffect, useState } from "react";
import FetchData from "../FetchData/FetchData";

const Footer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await FetchData("footer");
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
    <footer className="footer bg-[#19192E] text-neutral-content p-10">
      {data.map((elem,index) => {
        return (
          <div key={index}>
            <h6 className="footer-title">{elem.title}</h6>
            <a href="index.html" className="link link-hover">
              {elem.text_1}
            </a>
            <a href="index.html" className="link link-hover">
              {elem.text_2}
            </a>
            <a href="index.html" className="link link-hover">
              {elem.text_3}
            </a>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
