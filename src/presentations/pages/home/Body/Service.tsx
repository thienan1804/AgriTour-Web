import React from "react";
import { Grid } from "@mui/material";
import { serviceData } from "./ServiceDaa";
// Styles
import classNames from "classnames/bind";
import styles from "./Service.module.scss";
const cx = classNames.bind(styles);

const Service = () => {
  return (
    <Grid className={cx("wrapper")}>
      <h2 className={cx("heading")}>
        Một Số Dịch Vụ Mà Bạn Nhận Được Từ Supper App <span> STAR LHU</span>
      </h2>

      <Grid className={cx("box-wrapper")} container columns={12}>
        {serviceData.map((data, index) => (
          <Grid
            className={cx("box-container")}
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
            key={index}
          >
            <Grid className={cx("box-item")}>
              <img
                className={cx("box-img")}
                src={data.src}
                alt="supper-app-start-lhu car"
              />
              <h4 className={cx("box-title")}>{data.title}</h4>
              <p>{data.paragraph}</p>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Service;
