import React from "react";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import images from "../../../assets/images";
// Styles
import classNames from "classnames/bind";
import styles from "./PlatForm.module.scss";
const cx = classNames.bind(styles);

const PlatForm = () => {
  const items = [
    {
      title: "Quản lý quỹ đất nông nghiệp",
    },
    {
      title: "Quản lý cho thuê đất trồng cây",
    },
    {
      title: "Dịch vụ cá nhân hóa sở hữu đặc sản nông sản địa phương",
    },
    {
      title: "Thúc đẩy du lịch nông nghiệp tại địa phương",
    },
  ];
  return (
    <Grid className={cx("wrapper")}>
      {items.map((item, i) => (
        <Grid key={i} className={cx("service-wrapper")}>
          <span>{item.title}</span>
        </Grid>
      ))}
    </Grid>
  );
};

export default PlatForm;
