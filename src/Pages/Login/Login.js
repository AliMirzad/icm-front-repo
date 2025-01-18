import { useState } from "react";
import Input from "../../component/input/Input";
import * as style from "./styleCss";
import { loginUser } from "../../Api/LoginApi/loginUser";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    try {
      await loginUser(data.username, data.password);
      setError(null);
      navigate("/dashbord");
    } catch (err) {
      e.preventDefault();

      setError(err.message);
      setSubmit(false);
    }
  };
  return (
   <div className="w-full h-screen bg">
     <div className={style.formConatiner}>
      <span className={style.animatedBorder + style.roundedFirst}></span>
      <span className={style.animatedBorder + style.roundedSecond}></span>
      <span className={style.animatedBorder + style.roundedThird}></span>

      <form action="" method="post" className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.formTitle}>ورود</h2>
        <Input
          type="text"
          className={style.input}
          inp={{ placeholder: "نام کاربری", name: "userName" }}
          parentWraper={style.inputContainer}
          id={"userName"}
          svgStyle={style.svgStyle}
        />
        <Input
          type="password"
          className={style.input}
          inp={{ placeholder: "رمز عبور", name: "password" }}
          parentWraper={style.inputContainer}
          id={"password"}
          svgStyle={style.svgStyle}
        />
        <Input type={"checkBox"} labelText={"مرا به خاطر بسپار"} />
        <Input
          type={"submit"}
          inp={{ value: "ثبت" }}
          className={style.input + " " + style.paddingNone}
          parentWraper={style.inputContainer}
        />
      </form>
    </div>
   </div>
  );
};

export default Form;
