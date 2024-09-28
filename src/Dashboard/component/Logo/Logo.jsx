import logo from "../../../images/logo-team/Technix-opengraph.png";
export const Logo = () => {
  return (
    <div className="w-[200px] h-[70px] ml-4 mt-3">
      <img
        src={logo}
        alt=""
        className="rounded-3xl h-[60px] w-4/5 object-cover"
      />
    </div>
  );
};
