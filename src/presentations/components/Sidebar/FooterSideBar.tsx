// External
import LogoutIcon from "@mui/icons-material/Logout";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Internal
import DefaultAvatar from "../DefaultAvatar";
import useAuth from "../../../hooks/User/useAuth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

// Styles
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import images from "../../../assets/images";
import { useState } from "react";
import { auth } from "../../../data/firebase/config";
const cx = classNames.bind(styles);

interface FooterSideBarProps {
  openSidebar: boolean;
  handleLogOut: () => void;
}
const fbProvider = new GoogleAuthProvider();
const FooterSideBar = (props: FooterSideBarProps) => {
  const { user } = useAuth();
  let [isLoading, setLoading] = useState(false);

  const navigate: NavigateFunction = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isLoggined");
    navigate("/preview");
  };

  const handleLogIn = () => {
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
        console.log(error);
      });
    setLoading(false);
  };
  useAuth();

  return (
    <div className={cx("profile_content")}>
      <div className={cx("profile")}>
        {props.openSidebar && (
          <div className={cx("profile_details")}>
            {user ? (
              <DefaultAvatar avatar={user?.photoURL} medium />
            ) : (
              <img
                src={images.gmailLogo}
                alt="supper-app-start-lhu gmailLogo"
              />
            )}

            <div className={cx("name_job")}>
              <div className={cx("name")}>{user?.displayName ?? ""}</div>
              <div className={cx("job")}>{user?.email ?? ""}</div>
            </div>
          </div>
        )}
        <button
          className={cx("log-out-btn")}
          onClick={user ? handleLogOut : handleLogIn}
        >
          {user ? (
            <LogoutIcon
              className={
                props.openSidebar
                  ? cx("log-out-icon")
                  : cx("log-out-icon", "log-out-icon-hide")
              }
            />
          ) : (
            <LoginIcon
              className={
                props.openSidebar
                  ? cx("log-out-icon")
                  : cx("log-out-icon", "log-out-icon-hide")
              }
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default FooterSideBar;
