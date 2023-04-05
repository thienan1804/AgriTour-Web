// External files
import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import images from "../../../assets/images";
import { newBlogs } from "./FooterData";
import RefreshIcon from "@mui/icons-material/Refresh";

// Internal files
import FooterSocial from "./FooterSocial";

// Styles
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  const [isDisable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendSucc, setSendSucc] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },

    // * Rule of formik.values
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên người dùng"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng định dạng email"
        ),
      phone: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/([0-9]{10})\b/, "Vui lòng nhập đúng định dạng số điện thoại"),
      comment: Yup.string().required(
        "Vui lòng cho chúng tôi biết ý kiến của bạn"
      ),
    }),

    onSubmit: () => {
      setDisable(true);
      setLoading(true);

      setTimeout(() => {
        setDisable(false);
        setLoading(false);
      }, 5000);

      setSendSucc(true);
      formik.values.name = "";
      formik.values.email = "";
      formik.values.phone = "";
      formik.values.comment = "";
      setTimeout(() => {
        setSendSucc(false);
      }, 5000);
    },
  });

  useEffect(() => {
    const errors =
      formik.errors.name ??
      formik.errors.email ??
      formik.errors.phone ??
      formik.errors.comment;
    errors ? setDisable(true) : setDisable(false);
  }, [
    formik.errors.comment,
    formik.errors.email,
    formik.errors.name,
    formik.errors.phone,
  ]);

  useEffect(() => {
    sendSucc &&
      setTimeout(() => {
        toast.success("Cảm ơn đóng góp của bạn");
      }, 5000);
  });

  return (
    <React.Fragment>
      <Grid className={cx("blog-wrapper")}>
        <h2 className={cx("blog-title", "title")}>Tin Tức</h2>
        <Grid className={cx("blog-container")} container columns={12}>
          {newBlogs.map((blog, i) => (
            <Grid
              item
              className={cx("blog-item")}
              key={i}
              lg={3.85}
              md={3.85}
              sm={5.85}
              xs={11.85}
            >
              <img src={blog.src} alt="supper-app-start-lhu featureImg" />
              <h4>{blog.title}</h4>
              <section>{blog.date}</section>
              <p>{blog.paragraph}</p>
              <span>Read more</span>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          padding: {
            lg: "50px 100px",
            md: "50px",
            sm: "50px",
            xs: "20px",
          },
        }}
        className={cx("wrapper")}
      >
        <h2 className={cx("title")}>
          GET YOUR <span>FREE</span> CONSULTATION NOW
        </h2>
        <Grid container columns={12} className={cx("form-wrapper")}>
          <Grid
            item
            lg={5.8}
            md={5.8}
            sx={{
              display: { lg: "block", md: "block", sm: "none", xs: "none" },
            }}
            className={cx("background-contact")}
          >
            <Grid className={cx("contact-container")}>
              <h2 className={cx("form-contact-title")}>
                Your Idea, <span>Our Expertise.</span>
              </h2>
              <p className={cx("form-contact-content")}>
                We are a global leader in the new-age of digital product
                development.
              </p>
            </Grid>
          </Grid>
          <Grid
            item
            lg={5.8}
            md={5.8}
            xs={12}
            sm={12}
            className={cx("form-contact-wrapper")}
          >
            <form onSubmit={formik.handleSubmit}>
              <input
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className={
                  !formik.errors.name ? cx("input") : cx("input", "error")
                }
                type="text"
                placeholder={"Name"}
              />

              <input
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={
                  !formik.errors.email ? cx("input") : cx("input", "error")
                }
                type="text"
                placeholder="Email address"
              />

              <input
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={
                  !formik.errors.phone ? cx("input") : cx("input", "error")
                }
                type="text"
                placeholder="Contact number"
              />

              <textarea
                id="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                placeholder="Write details of your ideas/project"
                rows={4}
                className={
                  !formik.errors.comment ? cx("input") : cx("input", "error")
                }
              />

              <Grid className={cx("button-submit-wrapper")}>
                <Button disabled={isDisable} type="submit" variant="contained">
                  Submit
                  {loading && <RefreshIcon />}
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <FooterSocial />
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
