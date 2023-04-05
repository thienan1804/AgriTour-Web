// External files
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
// Internal files

// Styles
import classNames from "classnames/bind";
import styles from "./FormLogin.module.scss";
import { Button, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import images from "../../../../assets/images";
const cx = classNames.bind(styles);

interface FormLoginProps {
  onLoginWithGoogle: () => void;
}

const FormLogin = (props: FormLoginProps) => {
  let [isDisable, setDisable] = useState(false);
  let [errorMessage, setErrorMessage] = useState(null);

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

    onSubmit: async () => {
      setDisable(false);
    },
  });

  return (
    <form className={cx("form-wrapper")} onSubmit={formik.handleSubmit}>
      <label htmlFor="username">EMAIL NGƯỜI DÙNG</label>
      <input
        type="email"
        id="username"
        placeholder="Nhập email người dùng..."
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username && (
        <p className={cx("errors")}>{formik.errors.username}</p>
      )}

      <label htmlFor="password">MẬT KHẨU</label>
      <input
        type="password"
        id="password"
        placeholder="Nhập mật khẩu..."
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password && (
        <p className={cx("errors")}>{formik.errors.password}</p>
      )}

      <div className={cx("forgot-pass")}>
        <a href="/forgot-password">Quên mật khẩu</a>
      </div>

      <div
        style={{ justifyContent: "center", textDecoration: "none" }}
        className={cx("forgot-pass")}
      >
        Bạn chưa có mật khẩu?{" "}
        <a style={{ marginLeft: "8px" }} href="/regist">
          Đăng ký ngay!
        </a>
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
