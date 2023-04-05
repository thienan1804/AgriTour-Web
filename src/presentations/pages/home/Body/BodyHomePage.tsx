// External files
import React from "react";
import { Grid } from "@mui/material";
import images from "../../../../assets/images";
// Internal files
import Service from "./Service";
import ExampleSerVice from "./ExampleSerVice";

// Styles
import classNames from "classnames/bind";
import styles from "./BodyHomePage.module.scss";
const cx = classNames.bind(styles);
const BodyHomePage = () => {
  return (
    <Grid>
      <Grid className={cx("wrapper")} container columns={12}>
        <Grid
          className={cx("roadYo-wrapper")}
          item
          lg={6}
          md={6}
          xs={12}
          sm={12}
        >
          <img
            className={cx("roadYo-img")}
            src={images.roadYo}
            alt="super-app roadYo"
          />
          <h1 className={cx("roadYo-title")}>
            <span>STAR LHU</span> Chạy Liền Tay Thấy Ngay Tiện Ích
          </h1>
        </Grid>
        <Grid
          className={cx("banner")}
          item
          lg={6}
          md={6}
          xs={12}
          sm={12}
        ></Grid>
        <p className={cx("slogan")}>
          *Start LHU chuyển mình thành <span>Mega App</span> phục vụ cho mọi nhu
          cầu thiết yếu của gia đình với phương châm <span>chất lượng</span>,{" "}
          <span>an toàn</span>, <span>tiện lợi</span>. Thao tác{" "}
          <span>đơn giản</span> <span>dễ sử dụng</span> mọi lúc mọi nơi*
        </p>
      </Grid>

      <Grid className={cx("qc-wrapper")} container columns={12}>
        <Grid className={cx("qc-content")} item lg={6} md={6} xs={12} sm={12}>
          <h2 className={cx("qc-content-title")}>
            Phát Triển <span>Siêu Ứng Dụng</span> Đa Dịch Vụ
          </h2>
          <p className={cx("qc-content-paragraph")}>
            So với các ứng dụng di động đa tính năng, các{" "}
            <strong>micro app</strong> có tính năng giới hạn và cho phép người
            dùng tương tác, thực hiện một nhiệm vụ cụ thể và rời khỏi ứng dụng
            một cách nhanh chóng và hiệu quả.
          </p>
          <p className={cx("qc-content-paragraph")}>
            Ứng dụng trong ứng dụng, còn được gọi là <strong>micro app</strong>,
            là một ứng dụng có kích thước nhỏ và tập trung vào nhu cầu của khách
            hàng, được thiết kế để thực hiện các chức năng cụ thể với giao diện
            người dùng đơn giản.
          </p>
          <p className={cx("qc-content-paragraph")}>
            Thế nên đó là lúc mà một{" "}
            <span>
              <span>siêu ứng dụng</span>{" "}
            </span>
            trở nên cần thiết, với khả năng cung cấp cho người dùng nhiều dịch
            vụ đa dạng trên cùng một nền tảng, mỗi dịch vụ đều có giao diện
            người dùng độc đáo của riêng nó. Điều này mang lại sự tiện lợi và
            tối ưu hóa trải nghiệm người dùng, khi họ không cần phải cài đặt
            nhiều ứng dụng khác nhau để đáp ứng nhu cầu của mình.
          </p>
        </Grid>
        <Grid
          className={cx("qc-img-wrapper")}
          item
          lg={6}
          md={6}
          xs={12}
          sm={12}
        >
          <img src={images.webAndApp} alt="supper=app web&app" />
        </Grid>
      </Grid>

      <Service />

      <Grid className={cx("feature-supper-app")}>
        <h2>
          Các Tính Năng Được Tích Hợp Sẵn Trong Super App <span>STAR LHU</span>
        </h2>
        <p>
          Chúng tôi có một đội ngũ đầy đủ và nội bộ bao gồm các nhà thiết kế,
          nhà phát triển và nhà kiểm thử, có thể hỗ trợ bạn trong việc tạo ra
          phiên bản của STAR LHU riêng cho mình bằng cách sử dụng mã nguồn sẵn
          có của STAR LHU. <br />
          <br /> Điều này giúp tiết kiệm thời gian và chi phí cho bạn, đồng thời
          đảm bảo chất lượng sản phẩm được tối ưu hóa và đáp ứng nhu cầu của
          người dùng.
        </p>
      </Grid>

      <ExampleSerVice />
    </Grid>
  );
};

export default BodyHomePage;
