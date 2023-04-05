// External files
import React from "react";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
// Internal files
// Styles
import classNames from "classnames/bind";
import styles from "./DefaultAuthLayou.module.scss";
const cx = classNames.bind(styles);

interface DefaultAuthLayoutProps {
  children: React.ReactElement;
  title: string;
  showModalLogin?: boolean;
}

const DefaultAuthLayout: React.FC<DefaultAuthLayoutProps> = (props) => {
  const { children, title } = props;
  return (
    <Grid container columns={12} className={cx("wrapper")}>
      <Grid
        item
        lg={12}
        md={12}
        sx={{ display: { lg: "block", md: "block", sm: "none", xs: "none" } }}
        className={
          props.showModalLogin
            ? cx("img-wrapper")
            : cx("img-wrapper", "regist-wrapper")
        }
      >
        <div className={cx("slogan")}>
          Fly high,
          <br /> above the sky.
          <br />
          <span>
            comfortable, secure, your way <StarIcon /> <StarIcon /> <StarIcon />
          </span>
        </div>
        <Grid item lg={4} md={4} sm={12} xs={12} className={cx("form-wrapper")}>
          <h4>{title}</h4>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DefaultAuthLayout;
