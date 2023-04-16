// External files
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
// Internal files
import Header from "../../components/Header";
import PreviewHeader from "../../pages/preview/components/Header";
// Styles
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);
interface DefaultLayoutProps {
  body: JSX.Element;
}

const Footer = React.lazy(() => import("../Footer"));

const DefaultLayout = (props: DefaultLayoutProps) => {
  const [goTop, setGoTop] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setGoTop(true);
    } else {
      setGoTop(false);
    }
  });

  return (
    <Grid>
      <Header />
      <Grid
        sx={{
          margin: {
            lg: "calc(var(--header-height) + 50px) 0 20px 0",
            md: "calc(var(--header-height) + 20px) 0 20px 0",
            sm: "calc(var(--header-height) + 130px) 0 20px 0",
            xs: "calc(var(--header-height) + 80px) 0 20px 0",
          },
        }}
      >
        {props.body}
      </Grid>
      <a href="#" className={cx(goTop ? "go-top" : "active")}>
        <ArrowCircleUpRoundedIcon />
      </a>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Grid id="contact-us">
          <Footer />
        </Grid>
      </React.Suspense>
    </Grid>
  );
};

export default DefaultLayout;
