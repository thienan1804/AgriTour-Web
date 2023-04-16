import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';

export const headerData = [
  {
    title: "Trang chủ",
    icon: null,
    path: "/",
  },
  {
    title: "Ứng dụng",
    icon: null,
    path: "/app",
  },
  {
    title: "Dịch vụ",
    icon: <KeyboardArrowDownIcon />,
    path: "",
  },
  {
    title: "Tin tức",
    icon: null,
    path: "/news",
  },
  {
    title: "Hỗ trợ",
    icon: null,
    path: "#contact-us",
  },
  {
    title: "Đăng nhập",
    icon: null,
    path: "/login",
  },
];

export const menuItemData = [
  {
    icon: <ShoppingBagIcon />,
    title: "Đơn hàng",
  },
  {
    icon: <ChatIcon />,
    title: "Đánh giá",
  },
  {
    icon: <FavoriteIcon />,
    title: "Yêu thích",
  },
  {
    icon: <AccountCircleIcon />,
    title: "Tài khoản",
  },
]