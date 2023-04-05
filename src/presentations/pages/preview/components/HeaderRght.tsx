// External files
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Internal files
import { headerData } from "../../../components/Header/HeaderData";
import { auth } from "../../../../data/firebase/config";
import DefaultDropDown from "../../../components/DefaultDropDown/DefaultDropDown";
import PlatForm from "../../../components/Header/PlatForm";
import DefaultModal from "../../../components/defaultModal/DefaultModal";
import FormLogin from "./FormLogin";
import DefaultAuthLayout from "../../../components/DefaultAuthLayOut";
import FormRegist from "./RegistForm";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import useAuth from "../../../../hooks/User/useAuth";
import { useNavigate, NavigateFunction } from "react-router-dom";

// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const fbProvider = new GoogleAuthProvider();

const HeaderRight = () => {
  let [isLoading, setLoading] = useState(false);
  const navigate: NavigateFunction = useNavigate();
  const [isRenderPlatForm, setIsRenderPlatForm] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegist, setShowModalRegist] = useState(false);

  const handleLogin = () => {
    signInWithPopup(auth, fbProvider)
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
              data.title == "Nền tảng" ? (
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
                <Link className={cx("header-path")} to={data.path}>
                  <span className={cx("header-title")}>{data.title}</span>
                  <span className={cx("header-icon")}>{data.icon}</span>
                </Link>
              )
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

      {showModalRegist && (
        <DefaultModal
          title=""
          overrideMaxWidth={{ lg: "1000px", md: "1000px" }}
          onClose={() => {
            setShowModalRegist(false);
          }}
        >
          <DefaultAuthLayout title="Đăng ký">
            <FormRegist
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
