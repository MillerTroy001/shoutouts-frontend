import { Link, useNavigate, useParams } from "react-router-dom";
import "./UserShoutouts.css";
import { useContext, useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import SingleUserShoutout from "./SingleUserShoutout";
import {
  getAllShoutouts,
  getUserShoutout,
} from "../services/shoutoutApiService";
import NewSOForm from "./NewSOForm";
import AuthContext from "../context/AuthContext";

const UserShoutouts = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const nameFromPathParam: string | undefined = useParams().name!;
  const [UserShoutouts, setUserShoutouts] = useState<Shoutout[]>([]);

  const keepinItFresh = async (): Promise<void> => {
    if (nameFromPathParam) {
      const res = await getUserShoutout(nameFromPathParam);
      setUserShoutouts(res);
    } else {
      if (user && user.displayName) {
        const res = await getUserShoutout(user.displayName);
        setUserShoutouts(res);
      } else {
        setTimeout(() => {
          if (!user) {
            navigate("/");
          }
        }, 1000);
      }
    }
  };

  useEffect(() => {
    getUserShoutout(nameFromPathParam).then((res) => {
      setUserShoutouts(res);
    });
  }, [nameFromPathParam]);

  return (
    <div className="UserShoutouts">
      {UserShoutouts.map((shoutout) => (
        <SingleUserShoutout key={shoutout._id} singleShoutout={shoutout} />
      ))}
      <NewSOForm refresh={keepinItFresh} name={nameFromPathParam} />
      <Link to="/">
        <p>return to all shoutouts</p>
      </Link>
    </div>
  );
};

export default UserShoutouts;
