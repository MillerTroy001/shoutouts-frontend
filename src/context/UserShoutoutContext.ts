import { createContext } from "react";
import Shoutout from "../models/Shoutout";
import User from "../models/User";

interface UserShoutoutContextModel {
  userShoutouts: Shoutout[];
  user: User | null;
  getUserShoutout: (userId: string) => void;
}

const defaultValues: UserShoutoutContextModel = {
  userShoutouts: [],
  getUserShoutout: () => {},
  user: null,
};

const UserShoutoutContext = createContext(defaultValues);

export default UserShoutoutContext;
