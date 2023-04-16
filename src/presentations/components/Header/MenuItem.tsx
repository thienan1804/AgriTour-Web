import React, { useEffect, useState } from "react";
import UserAccount from "../../../data/types/User/UserAccoutn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DefaultAvatar from "../DefaultAvatar";
import Tippy from "@tippyjs/react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "firebase/firestore";

import { menuItemData } from "./HeaderData";

// Styles
import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../data/firebase/config";

const cx = classNames.bind(styles);

interface MenuItemProps {
  user: UserAccount | undefined;
}

const MenuItem = (props: MenuItemProps) => {
  const navigate: NavigateFunction = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isLoggined");
    navigate("/preview");
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      const querySnapshot = await getDocs(
        query(
          collection(db, "usersinformation"),
          where("email", "==", props.user?.email)
        )
      );
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setUsername(userDoc.data().username);
      }
    };
    fetchUsername();
  }, [props.user?.email]);

  console.log("user: ", username);

  return (
    <div className={cx("account-dropdown-wrapper")}>
      <div className={cx("header-account")}>
        <Tippy
          content={`${props?.user?.email}`}
          placement="bottom"
          theme="light"
        >
          <div className={cx("user-cart-avt")}>
            <DefaultAvatar avatar={props.user?.photoURL} large />
          </div>
        </Tippy>
        <div className={cx("user-cart-name")}>
          <Tippy
            content={`${props?.user?.email}`}
            placement="right"
            theme="light"
          >
            <span className={cx("accountinfo-username")}>
              {username ? username : props.user?.displayName}
            </span>
          </Tippy>
          <span className={cx("accountinfo-role")}>{props.user?.email}</span>
        </div>
      </div>

      {menuItemData.map((menuItem, index) => (
        <div className={cx("change-pass")} key={index}>
          <div className={cx("change-pass-icon")}>{menuItem.icon}</div>
          <div className={cx("change-pass-title")}>
            <a href="/account">{menuItem.title}</a>
          </div>
          <span className={cx("change-nav-pass-icon")}>
            <KeyboardArrowRightIcon />
          </span>
        </div>
      ))}

      <div className={cx("log-out-wrapper")}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleLogOut}
        >
          Đăng xuất
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
