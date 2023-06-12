import { ReactNode, useContext, useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import UserContext from "./UserShoutoutContext";
import UserShoutoutContext from "./UserShoutoutContext";
import { getUserShoutout } from "../services/shoutoutApiService";

interface Props {
  children: ReactNode;
}

const UserShoutoutContextProvider = ({ children }: Props) => {
  const { userShoutouts, user } = useContext(UserShoutoutContext);
  const [allUserShoutouts, setAllUserShoutouts] = useState<Shoutout[]>([]);

  const getUserShoutoutHandler = (): void => {
    if (user) {
      getUserShoutout(user._id!).then((response) => {
        setAllUserShoutouts(response);
      });
    }
  };

  useEffect(() => {
    getUserShoutoutHandler();
  }, [userShoutouts]);

  return (
    <UserContext.Provider value={{ user, getUserShoutout, userShoutouts }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserShoutoutContextProvider;
