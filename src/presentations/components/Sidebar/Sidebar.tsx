// External files
// Internal files
import { SidebarData } from "./SidebarData";
import SubSideBar from "./SubSideBar";
import HeaderSideBar from "./HeaderSidebar";
import { Grid } from "@mui/material";
// import FooterSideBar from "./FooterSideBar";
// Styles
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import FooterSideBar from "./FooterSideBar";
const cx = classNames.bind(styles);

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
  className: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { openSidebar, setOpenSidebar, className } = props;
  return (
    <Grid
      className={className}
      sx={{
        left: {
          lg: "0",
          md: "0",
          sm: !openSidebar ? "-100%" : "0",
          xs: !openSidebar ? "-100%" : "0",
        },
      }}
    >
      {/* Header*/}
      <HeaderSideBar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Body sidebar */}

      <ul className={cx("body")}>
        {SidebarData.map((item, index) => (
          <SubSideBar
            item={item}
            key={index}
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
        ))}
      </ul>

      {/* Footer */}
      <Grid>
        <FooterSideBar openSidebar={openSidebar} handleLogOut={() => {}} />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
