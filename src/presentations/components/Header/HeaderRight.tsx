// External files
import { Link } from "react-router-dom";
import { useState } from "react";
import { Grid } from "@mui/material";
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

// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const HeaderRight = () => {
  const { user } = useAuth();
  const [isRender, setIsRender] = useState(false);
  const [isRenderPlatForm, setIsRenderPlatForm] = useState(false);

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
                <a className={cx("header-path")} href={data.path}>
                  <span className={cx("header-title")}>{data.title}</span>
                  <span className={cx("header-icon")}>{data.icon}</span>
                </a>
              )
            ) : (
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
            )}
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default HeaderRight;
