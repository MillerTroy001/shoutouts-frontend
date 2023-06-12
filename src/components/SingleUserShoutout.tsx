import Shoutout from "../models/Shoutout";
import { deleteOneShoutout } from "../services/shoutoutApiService";
import "./SingleUserShoutout.css";

interface Props {
  singleShoutout: Shoutout;
}

const SingleUserShoutout = ({ singleShoutout }: Props) => {
  return (
    <div className="SingleUserShoutout">
      <h3 className="boldTo">Shout out to {singleShoutout.to}</h3>
      <p>- from: {singleShoutout.from}</p>
      <p className="theShoutout">{singleShoutout.shoutout}</p>
      <button onClick={() => deleteOneShoutout(singleShoutout._id!)}>
        Delete
      </button>
    </div>
  );
};

export default SingleUserShoutout;
