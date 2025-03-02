import { useState } from "react";
import Input from "../../component/input/Input";
import * as style from "./styleCss";
import { loginUser } from "../../Api/LoginApi/loginUser";
import { useNavigate } from "react-router-dom";
import ErrorPopUp from "../../component/ErrorPopUp/ErrorPopUp";
import { useAuth } from "../../AuthProvider/AuthProvider";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const { setUserId } = useAuth();
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);
  const handleClose = () => {
    setModal(true);
    setError(null);
  };
  const handleFocus = () => {
    setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    try {
      e.preventDefault()
    const response=  await loginUser(data.username, data.password);
      // setUserData(user)

      setError(null);
      navigate(`/dashboard`);
      setUserId(response.id);

    } catch (err) {
      e.preventDefault();
      console.log(err.message);

      setError(err.message);
      setSubmit(false);
    }
    
  };

  
  return (
    <div className="w-full h-screen bg">
      <div className={style.formConatiner}>
        <span
          className={
            error === null
              ? style.animatedBorder + style.roundedFirst
              : style.animatedBorder + style.error_1
          }
        ></span>
        <span
          className={
            error === null
              ? style.animatedBorder + style.roundedSecond
              : style.animatedBorder + style.error_2
          }
        ></span>
        <span
          className={
            error === null
              ? style.animatedBorder + style.roundedThird
              : style.animatedBorder + style.error_3
          }
        ></span>

        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.formTitle}>ورود</h2>
          <Input
            type="text"
            className={style.input}
            inp={{ placeholder: "نام کاربری", name: "username" }}
            parentWraper={style.inputContainer}
            id={"userName"}
            svgStyle={style.svgStyle}
            onFocus={handleFocus}
            hasIcon={true}
          />
          <Input
            type="password"
            className={style.input}
            inp={{ placeholder: "رمز عبور", name: "password" }}
            parentWraper={style.inputContainer}
            id={"password"}
            svgStyle={style.svgStyle}
            onFocus={handleFocus}
            hasIcon={true}
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

      <ErrorPopUp error={error} handleClose={handleClose} modal={modal} />
    </div>
  );
};

export default Form;
