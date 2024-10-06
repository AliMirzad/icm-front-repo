import { useState } from "react";
import Input from "../../component/input/Input";
import * as style from "./StyleCss";
import { loginUser } from "../../Api/LoginApi/loginUser";
import { useNavigate } from "react-router-dom";

export const Login = () => {
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
      navigate("/dashboard/main");
    } catch (err) {
      setError(err.message);
      setSubmit(false);
    }
  };

  return (
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
        />

        <Input
          inp={{
            type: "checkbox",
            name: "rememberMe",
          }}
          labelText="مرا به‌خاطر بسپار"
          inputWraper={style.inputContainer + style.checkboxMobilewraper}
          className={style.checkboxMobile}
        />

        {error && !submit && (
          <p className="text-rose-600 text-[14px] text-start w-[90%]">
            {error}
          </p>
        )}

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
  );
};

export default Login;
