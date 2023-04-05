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
      img: images.platFormOnPc,
      title: "Web",
      description: "Chrome/FireFox/Safari",
    },
    {
      img: images.platFormOnMobile,
      title: "App",
      description: "IOS/Androi",
    },
  ];
  return (
    <Grid className={cx("wrapper")}>
      <Carousel className={cx("carousel-wrapper")}>
        {items.map((item, index) => (
          <Grid key={index} className={cx("content-wrapper")}>
            <img
              src={item.img}
              className={cx(item.img == images.platFormOnPc ? "onPc" : "onMB")}
              alt="supper-app-start-lhu platform"
            />
            <h2
              className={cx(
                item.img == images.platFormOnPc ? "titlePc" : "titleMB"
              )}
            >
              {item.title}
            </h2>
            <h2 className={cx("description")}>{item.description}</h2>
          </Grid>
        ))}
      </Carousel>
    </Grid>
  );
};

export default PlatForm;
