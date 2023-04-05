// External files
import React from "react";
import Grid from "@mui/material/Grid";
// Internal files
import images from "../../../assets/images";
// Styles
import classNames from "classnames/bind";
import styles from "./DefaultAuthLayou.module.scss";
const cx = classNames.bind(styles);

interface DefaultAuthLayoutProps {
  children: React.ReactElement;
  title: string;
}

const DefaultAuthLayout: React.FC<DefaultAuthLayoutProps> = (props) => {
  const { children, title } = props;
  return (
    <Grid container columns={12} className={cx("wrapper")}>
      <Grid
        item
        lg={8}
        md={8}
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
        className={cx("img-wrapper")}
      ></Grid>
      <Grid item lg={4} md={4} sm={12} xs={12} className={cx("form-wrapper")}>
        <div className={cx("LogoMG-wrapper")}>
          <img
            src={
              "https://o.remove.bg/downloads/c86b7b6e-9787-489d-8e56-4d1908a5ecf0/image-removebg-preview.png"
            }
            alt="logoMG"
          />
        </div>
        <h4>{title}</h4>
        {children}
      </Grid>
    </Grid>
  );
};

export default DefaultAuthLayout;
