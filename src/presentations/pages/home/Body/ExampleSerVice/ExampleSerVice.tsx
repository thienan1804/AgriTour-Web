import React from "react";
import { Button, Grid } from "@mui/material";
import {
  exampleSerViceData,
  sponsorData,
  teamData,
} from "./ExampleSerViceData";
import FacebookIcon from "@mui/icons-material/Facebook";
// Styles
import classNames from "classnames/bind";
import styles from "./ExampleSerVice.module.scss";
import images from "../../../../../assets/images";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

const ExampleSerVice = () => {
  return (
    <Grid>
      {exampleSerViceData.map((data, i) => (
        <Grid key={i} container columns={12}>
          {i % 2 == 0 ? (
            <>
              <Grid
                className={cx("container")}
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
              >
                <h3 className={cx("title")}>{data.title}</h3>
                <p className={cx("paragraph")}>
                  {data.paragraph}
                  <br /> <br /> {data.paragraph2}
                </p>
                <section className={cx("similar-app-title")}>
                  Những ứng dụng có tính năng tương tự:{" "}
                </section>
                <Grid className={cx("similar-app-wrapper")}>
                  {data.similarApp.map((similar, i) => (
                    <img
                      key={i}
                      className={cx("similar-app-img")}
                      src={similar}
                      alt="supper-app-start-lhu gofood"
                    />
                  ))}
                </Grid>
              </Grid>
              <Grid
                className={cx("feature-wrapper")}
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
              >
                <img
                  src={data.feature}
                  alt="supper-app-start-lhu groceryFeature"
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid
                className={cx("feature-wrapper")}
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  display: {
                    lg: "flex",
                    md: "flex",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <img
                  src={data.feature}
                  alt="supper-app-start-lhu groceryFeature"
                />
              </Grid>

              <Grid
                className={cx("container")}
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
              >
                <h3 className={cx("title")}>{data.title}</h3>
                <p className={cx("paragraph")}>
                  {data.paragraph} <br /> <br /> {data.paragraph2}
                </p>
                <section className={cx("similar-app-title")}>
                  Những ứng dụng có tính năng tương tự:{" "}
                </section>
                <Grid className={cx("similar-app-wrapper")}>
                  {data.similarApp.map((similar, i) => (
                    <img
                      key={i}
                      className={cx("similar-app-img")}
                      src={similar}
                      alt="supper-app-start-lhu gofood"
                    />
                  ))}
                </Grid>
              </Grid>

              <Grid
                className={cx("feature-wrapper")}
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                sx={{
                  display: {
                    lg: "none",
                    md: "none",
                    sm: "flex",
                    xs: "flex",
                  },
                }}
              >
                <img
                  src={data.feature}
                  alt="supper-app-start-lhu groceryFeature"
                />
              </Grid>
            </>
          )}
        </Grid>
      ))}

      <Grid className={cx("see-more")}>
        <Button variant="contained">Xem thêm</Button>
      </Grid>

      <Grid className={cx("about-wrapper")}>
        <h2 className={cx("about-title")}>Đội Ngũ Phát Triển</h2>

        <Grid container columns={12} className={cx("our-team-wrapper")}>
          {teamData.map((data, index) => (
            <Grid
              item
              lg={2.85}
              key={index}
              md={5.85}
              xs={12}
              sm={5.85}
              className={cx("our-team-info-wrapper")}
            >
              <img
                src={data.src}
                alt="supper-app-start-lhu member"
                className={cx("our-team-info")}
              />
              <Grid className={cx("our-team-item")}>
                <h3>{data.nameInfo}</h3>
                <p>{data.job}</p>
                <a href={data.to} target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </a>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className={cx("sponsor-wrapper")}>
        <h2 className={cx("about-title")}>Nhà Tài Trợ</h2>
        <Grid container columns={12} className={cx("sponsor-container")}>
          {sponsorData.map((sponor, i) => (
            <Grid
              item
              key={i}
              className={cx("sponsor-logo-wrapper")}
              lg={3.85}
              md={3.85}
              sm={3.85}
              xs={5.85}
            >
              <img src={sponor} alt="supper-app-start-lhu sponer-logo" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExampleSerVice;
