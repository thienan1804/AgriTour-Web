import { createContext } from "react";
import UserAccount from "../data/types/User/UserAccoutn";
const UserContext = createContext<UserAccount | undefined>(undefined);

export { UserContext };
