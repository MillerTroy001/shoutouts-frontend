import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./SingleShoutout.css";
import { deleteOneShoutout } from "../services/shoutoutApiService";

interface Props {
  shoutout: Shoutout;
  update: () => void;
}

const SingleShoutout = ({ shoutout, update }: Props) => {
  const deleteHandler = (): void => {
    deleteOneShoutout(shoutout._id!).then((res) => {
      update();
    });
  };

  return (
    <div className="SingleShoutout">
      <h3 className="boldTo">
        Shout out to{" "}
        <Link to={`/user/${encodeURIComponent(shoutout.to)}`}>
          {shoutout.to}
        </Link>
      </h3>
      <p>
        - from:{" "}
        {shoutout.authorPhoto && (
          <img className="author" src={shoutout.authorPhoto} alt={"author"} />
        )}
        {"   "}
        <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
          {shoutout.from}
        </Link>
      </p>
      <p className="theShoutout">{shoutout.shoutout}</p>
      {shoutout.shoutoutPHoto && (
        <img src={shoutout.shoutoutPHoto} alt={"shoutout"} className="user" />
      )}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default SingleShoutout;
