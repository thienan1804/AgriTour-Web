// External files
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// Internal files
import { auth, db } from "../../../../data/firebase/config";
import { Button, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from "../../../../hooks/User/useAuth";
import { addDoc, collection } from "firebase/firestore";
// Styles
import classNames from "classnames/bind";
import styles from "./FormLogin.module.scss";

const cx = classNames.bind(styles);

interface FormFormRegistProps {
  onLoginWithGoogle: () => void;
  setShowModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModalRegist: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormRegist = (props: FormFormRegistProps) => {
  let [isDisable, setDisable] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      usernameRegist: "",
      password: "",
      confirmPassword: "",
    },

    // * Rule of formik.values
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập họ và tên")
        .min(8, "Họ và tên phải chứa ít nhất 8 kí tự"),
      usernameRegist: Yup.string().required("Vui lòng nhập tên người dùng"),
      password: Yup.string().required("Vui lòng nhập mật khẩu"),
      confirmPassword: Yup.string()
        .required("Vui lòng xác nhận mật khẩu")
        // * oneOf: check matches with input has props: name = 'password'
        .oneOf([Yup.ref("password")], "Mật khẩu phải khớp"),
    }),

    onSubmit: () => {
      createUserWithEmailAndPassword(
        auth,
        formik.values.usernameRegist,
        formik.values.password
      )
        .then(async (userCredentail) => {
          console.log(userCredentail);
          localStorage.setItem("isLoggined", userCredentail.user.uid);
          const username = formik.values.name;
          const email = formik.values.usernameRegist;

          await addDoc(collection(db, "usersinformation"), { username, email })
            .then((re) => {
              toast.success("Đăng ký thành công");
            })
            .catch((error) => {
              toast.error(error.message);
            });

          window.location.href = "/";
        })
        .catch((error) => {
          toast.error(error.message);
        });
      setDisable(false);
    },
  });
  useAuth();

  return (
    <form className={cx("form-wrapper")} onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Họ và tên người dùng</label>
      <div
        className={
          !formik.errors.name
            ? cx("input-wrapper")
            : cx("input-wrapper", "error")
        }
      >
        <PermIdentityIcon />
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>

      <label htmlFor="usernameRegist">Email người dùng</label>
      <div
        className={
          !formik.errors.usernameRegist
            ? cx("input-wrapper")
            : cx("input-wrapper", "error")
        }
      >
        <PermIdentityIcon />
        <input
          type="email"
          id="usernameRegist"
          placeholder="Email"
          value={formik.values.usernameRegist}
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
          placeholder="Mật khẩu"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
      <div
        className={
          !formik.errors.confirmPassword
            ? cx("input-wrapper")
            : cx("input-wrapper", "error")
        }
      >
        <LockOpenIcon />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
      </div>

      <div
        style={{ justifyContent: "center", textDecoration: "none" }}
        className={cx("forgot-pass")}
      >
        Bạn đã có tài khoản?{" "}
        <p
          style={{
            marginLeft: "8px",
            color: "var(--blue-color)",
            cursor: "pointer",
          }}
          onClick={() => {
            props.setShowModalLogin(true);
            props.setShowModalRegist(false);
          }}
        >
          Đăng nhập ngay!
        </p>
      </div>

      <button type="submit" className={cx("btn", "login")} disabled={isDisable}>
        ĐĂNG KÝ
        {isDisable && (
          <CircularProgress
            size={14}
            style={{ color: "white", position: "absolute", right: 16 }}
          />
        )}
      </button>
    </form>
  );
};

export default FormRegist;
