import { CircularProgress } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserAccount from "../data/types/User/UserAccoutn";
import useAuth from "../hooks/User/useAuth";
import { UserContext } from "../hooks/context";

const PrivateRoute = () => {
  const { user, errorMessage } = useAuth();

  if (user === undefined && errorMessage === undefined) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {" "}
        <CircularProgress />
      </div>
    );
  }
  if (errorMessage !== undefined) {
    toast.error(`${errorMessage}`);
  }

  if (user !== undefined) {
    return (
      <UserContext.Provider value={user as UserAccount}>
        <Outlet />
      </UserContext.Provider>
    );
  } else {
    return <Navigate to="/preview" replace />;
  }
};

export default PrivateRoute;
