// External files
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import HeaderRight from "./HeaderRght";
import MenuIcon from "@mui/icons-material/Menu";
// Internal files
import images from "../../../../assets/images";
import Sidebar from "../../../components/Sidebar";

// Styles
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <Grid container columns={12} className={cx("wrapper")}>
      <Grid className={cx("logo-wrapper")} item lg={2} md={2} sm={6} xs={6}>
        <Link to="/" className={cx("home-url")}>
          <img className={cx("logo")} src={images.logoAgri} alt="" />
        </Link>
      </Grid>
      <Grid
        sx={{
          display: {
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
        style={{ height: "100%" }}
        item
        lg={10}
        md={10}
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
