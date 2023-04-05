import { useEffect, useState } from "react";
import { auth } from "../../data/firebase/config";
import UserAccount from "../../data/types/User/UserAccoutn";

const useAuth = () => {
  const [user, setUser] = useState<UserAccount | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<String | undefined>(
    undefined
  );
  let [isLoading, setLoading] = useState(false);
  const token: string | null = window.localStorage.getItem("isLoggined");

  useEffect(() => {
    if (token == null) {
      setUser(undefined);
      setErrorMessage("Cần đăng nhập trước mới có thể vào trang này!");
    } else {
      const unsubcribed = auth.onAuthStateChanged((user) => {
        if (user) {
          const { displayName, email, uid, photoURL } = user;
          setUser({
            displayName,
            email,
            uid,
            photoURL,
          });
        }
      });

      // clean function
      return () => {
        unsubcribed();
      };
    }
  }, [token]);

  return { user, errorMessage };
};

export default useAuth;
