// External files
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// Internal files
import { auth } from "../../../../data/firebase/config";
import { Button, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../../../../hooks/User/useAuth";
// Styles
import classNames from "classnames/bind";
import styles from "./FormLogin.module.scss";

const cx = classNames.bind(styles);

interface FormLoginProps {
  onLoginWithGoogle: () => void;
  setShowModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModalRegist: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormLogin = (props: FormLoginProps) => {
  let [isDisable, setDisable] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    // * Rule of formik.values
    validationSchema: Yup.object({
      username: Yup.string().required("Vui lòng nhập tên người dùng"),
      password: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),

    onSubmit: () => {
      signInWithEmailAndPassword(
        auth,
        formik.values.username,
        formik.values.password
      )
        .then((userCredentail) => {
          console.log(userCredentail);
          localStorage.setItem("isLoggined", userCredentail.user.uid);

          window.location.href = "/";
        })
        .catch((error) => {
          toast.error("Tên đăng nhập hoặc mật khẩu không khớp");
        });
      setDisable(false);
    },
  });
  useAuth();

  return (
    <form className={cx("form-wrapper")} onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Email người dùng</label>
      <div
        className={
          !formik.errors.username
            ? cx("input-wrapper")
            : cx("input-wrapper", "error")
        }
      >
        <PermIdentityIcon />
        <input
          type="email"
          id="username"
          autoComplete="off"
          name="username"
          placeholder="Email"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>

      <label htmlFor="password">Mật khẩu</label>
      <div
        className={
          !formik.errors.password
            ? cx("input-wrapper")
            : cx("input-wrapper", "error")
        }
      >
        <LockOpenIcon />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Mật khẩu"
          autoComplete="off"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      <div className={cx("forgot-pass")}>
        <a href="/forgot-password">Quên mật khẩu</a>
      </div>

      <button type="submit" className={cx("btn", "login")} disabled={isDisable}>
        ĐĂNG NHẬP
        {isDisable && (
          <CircularProgress
            size={14}
            style={{ color: "white", position: "absolute", right: 16 }}
          />
        )}
      </button>
      <Button
        startIcon={<GoogleIcon />}
        type="button"
        onClick={props.onLoginWithGoogle}
        className={cx("btn", "regist")}
      >
        ĐĂNG NHẬP VỚI GOOGLE
      </Button>
    </form>
  );
};

export default FormLogin;
