// Internal files
import React from "react";
// External files
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { footerData } from "./FooterData";
import EmailIcon from "@mui/icons-material/Email";
// Styles
import classNames from "classnames/bind";
import images from "../../../assets/images";
import styles from "./FooterSocial.module.scss";
const cx = classNames.bind(styles);

const FooterSocial = () => {
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          padding: {
            lg: "15px 100px",
            md: "15px 100px",
            sm: "15px 20px",
            xs: "15px 20px",
          },
        }}
        className={cx("wrapper")}
        columns={12}
      >
        <Grid className={cx("logo-wrapper")} item lg={3} md={3} xs={12} sm={3}>
          <img
            className={cx("logo")}
            src={images.logoRemoveBg}
            alt="supper-app-start-lhu logo"
          />
          <p>
            The largest set of pre-built business ready products in the world.
            Book slots with our app bards here
          </p>
        </Grid>

        {footerData.map((data, index) => (
          <Grid
            key={index}
            item
            className={cx("content")}
            lg={3}
            md={3}
            sm={3}
            xs={12}
          >
            <h4>{data.title}</h4>
            {[...data.danhSach].map((item, index) => (
              <p key={index} className={cx("content-item")}>
                {item}
              </p>
            ))}
          </Grid>
        ))}

        <Grid className={cx("content")} item lg={3} md={3} xs={12} sm={3}>
          <h4>Liên Hệ Qua MXH</h4>
          <Grid className={cx("social-wrapper")}>
            <FacebookIcon />
            <p className={cx("content-item")}>Facebook</p>
          </Grid>
          <Grid className={cx("social-wrapper")}>
            <img src={images.emailLogo} alt="supper-app-start-lhu email" />
            <p className={cx("content-item")}>Gmail</p>
          </Grid>
          <Grid className={cx("social-wrapper")}>
            <img src={images.zaloLogo} alt="supper-app-start-lhu zalo" />
            <p className={cx("content-item")}>Zalo</p>
          </Grid>
          <Grid className={cx("social-wrapper")}>
            <img src={images.instaLogo} alt="supper-app-start-lhu instagram" />
            <p className={cx("content-item")}>Instagram</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={cx("copyright")} item lg={12}>
        <span>© 2023 LHU-STAR All Rights Reserved</span>
      </Grid>
    </React.Fragment>
  );
};

export default FooterSocial;
