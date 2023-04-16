// External files
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// Internal files
import { headerData } from "./HeaderData";

import DefaultAvatar from "../DefaultAvatar/DefaultAvatar";

import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
import useAuth from "../../../hooks/User/useAuth";
import MenuItem from "./MenuItem";
import DefaultDropDown from "../DefaultDropDown/DefaultDropDown";
import "tippy.js/themes/light.css";
import PlatForm from "./PlatForm";

import DefaultModal from "../defaultModal";
import DefaultAuthLayout from "../DefaultAuthLayOut";
import FormLogin from "../../pages/preview/components/FormLogin";
import FormRegist from "../../pages/preview/components/RegistForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../data/firebase/config";
import { toast } from "react-toastify";

// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const ggProvider = new GoogleAuthProvider();

const HeaderRight = () => {
  const navigate: NavigateFunction = useNavigate();
  const { user } = useAuth();
  let [isLoading, setLoading] = useState(false);
  const [isRender, setIsRender] = useState(false);
  const [isRenderPlatForm, setIsRenderPlatForm] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegist, setShowModalRegist] = useState(false);
  const [checkPreview, setCheckPreview] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("preview") !== -1) {
      setCheckPreview(true);
    }
  }, [checkPreview]);

  const handleLogin = () => {
    signInWithPopup(auth, ggProvider)
      .then((result) => {
        // This gives you a FaceBook Access Token. You can use it to access the FaceBook API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        setLoading(false);

        localStorage.setItem("isLoggined", user.uid);

        navigate("/");
      })
      .catch((error) => {
        toast(error);
      });
    setLoading(false);
  };
  useAuth();

  return (
    <Grid className={cx("headerRight-wrapper")}>
      <ul className={cx("headerRight-ul")}>
        {headerData.map((data, index) => (
          <li key={index}>
            {data.path !== "/login" ? (
              // Check neu item la nen tang thi hien dropdown nen tang
              data.title == "Dịch vụ" ? (
                <DefaultDropDown
                  placement="auto"
                  visible={isRenderPlatForm}
                  childrenRender={<PlatForm />}
                >
                  <Link
                    className={cx("header-path")}
                    to={data.path}
                    onClick={() => setIsRenderPlatForm(!isRenderPlatForm)}
                  >
                    <span className={cx("header-title")}>{data.title}</span>
                    <span className={cx("header-icon")}>{data.icon}</span>
                  </Link>
                </DefaultDropDown>
              ) : (
                <a className={cx("header-path")} href={data.path}>
                  <span className={cx("header-title")}>{data.title}</span>
                  <span className={cx("header-icon")}>{data.icon}</span>
                </a>
              )
            ) : // Check neu ko phai trang chu thi hien button dang nhap
            !checkPreview ? (
              <Grid className={cx("login-path")}>
                <DefaultDropDown
                  visible={isRender}
                  placement="auto"
                  childrenRender={<MenuItem user={user} />}
                >
                  <Grid
                    className={cx("avt-wrapper")}
                    onClick={() => setIsRender(!isRender)}
                  >
                    <DefaultAvatar medium avatar={user?.photoURL} />
                    <ArrowDropDownIcon />
                  </Grid>
                </DefaultDropDown>
              </Grid>
            ) : (
              <Grid className={cx("login-path")}>
                <Button
                  className={cx("login-btn")}
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setShowModalLogin(true);
                  }}
                >
                  Đăng nhập
                </Button>
              </Grid>
            )}
          </li>
        ))}
      </ul>

      {/* Modal login */}
      {showModalLogin && (
        <DefaultModal
          title=""
          overrideMaxWidth={{ lg: "1000px", md: "1000px" }}
          onClose={() => {
            setShowModalLogin(false);
          }}
        >
          <DefaultAuthLayout showModalLogin={showModalLogin} title="Đăng nhập">
            <FormLogin
              setShowModalLogin={setShowModalLogin}
              setShowModalRegist={setShowModalRegist}
              onLoginWithGoogle={handleLogin}
            />
          </DefaultAuthLayout>
        </DefaultModal>
      )}
    </Grid>
  );
};

export default HeaderRight;
