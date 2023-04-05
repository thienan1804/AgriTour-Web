// External files
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import HeaderRight from "./HeaderRight";
import MenuIcon from "@mui/icons-material/Menu";
// Internal files
import images from "../../../assets/images";

// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Sidebar from "../Sidebar";
const cx = classNames.bind(styles);

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <Grid container columns={12} className={cx("wrapper")}>
      <Grid className={cx("logo-wrapper")} item lg={2} md={2} sm={6} xs={6}>
        <Link to="/" className={cx("home-url")}>
          <img className={cx("logo")} src={images.logoRemoveBg} alt="" />
        </Link>
      </Grid>
      <Grid
        item
        lg={10}
        md={10}
        sx={{
          display: {
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <HeaderRight />
      </Grid>

      <Grid
        item
        sm={6}
        xs={6}
        sx={{
          display: {
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
        className={cx("menu-btn-wrapper")}
      >
        <Button
          variant="contained"
          className={cx("btn-menu-mobile")}
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          <MenuIcon className={cx("icon-menu-mobile")} />
        </Button>
      </Grid>

      <Grid
        sx={{
          display: {
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <Sidebar
          className={
            !openSidebar ? cx("sidebar") : cx("sidebar", "active-sidebar")
          }
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />

        {/* Modal show Sidebar */}

        {openSidebar && (
          <Grid
            className={cx("modal")}
            sx={{
              display: {
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
            }}
            onClick={() => setOpenSidebar(!openSidebar)}
          ></Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;