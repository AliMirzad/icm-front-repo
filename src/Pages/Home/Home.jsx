import Footer from "../../component/footer/Footer";
import Blog from "./components/Blog/Blog";
import Goals from "./components/Goals/Goals";
import Hero from "./components/Hero/Hero";
import Tech from "./components/Tech/Tech";
import { Wrapper } from "./components/Wrapper/Wrapper";
import './Home.css'
export const Home = () => {
  return (
    <div className="w-full h-24 bg-slate-500">
      <Hero />
      <Wrapper />
      <Goals />
      <Tech />
      <Blog />
      <Footer/>
    </div>
  );
};
