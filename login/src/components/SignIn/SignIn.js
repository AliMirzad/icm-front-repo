import { useState } from "react";
import Input from "../Input/Input";
import * as style from "../StyleCss";
import { loginUser } from "../ApiMethod";
import { useNavigate } from "react-router-dom";
import bg from "../../images/bg.jpg";
import ErrorPopup from "../ErrorPopUp/ErrorPopUp";


const SignIn = () => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    try {
      await loginUser(data.username, data.password);
      setError(null);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      setSubmit(false);
    }
  };
  const closePopup = () => {
    setError(null);
  };

  return (
    <div
      className="w-full  min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.title}>ورود</h2>
          <Input
            labelText="نام کاربری"
            id="userNameSignIn"
            inp={{
              placeholder: "نام کاربری",
              type: "text",
              maxLength: 50,
              name: "username",
            }}
            className={style.input}
            inputWraper={style.inputContainer}
            error={style.error}
            normal={style.normalBorder}
          />

          <Input
            labelText=" رمز عبور"
            id="passwordSignIn"
            inp={{
              placeholder: " رمز عبور",
              type: "password",
              name: "password",
            }}
            className={style.input}
            inputWraper={style.inputContainer}
            error={style.error}

          />

          <Input
            inp={{
              type: "checkbox",
              name: "rememberMe",
            }}
            labelText="مرا به‌خاطر بسپار"
            inputWraper={style.checkboxMobile}
          />

{error && <ErrorPopup message={error} onClose={closePopup} />}


          <button
            className={
              !submit ? style.btnClass : style.btnClass + style.disableBtn
            }
            type="submit"
            disabled={submit}
          >
            {submit ? (
              <>
                در حال بارگذاری
                <span className="loading loading-spinner loading-sm"></span>
              </>
            ) : (
              "ثبت"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
