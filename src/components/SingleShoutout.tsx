import Shoutout from "../models/Shoutout";
import "./SingleShoutout.css";

interface Props {
  shoutout: Shoutout;
}

const SingleShoutout = ({ shoutout }: Props) => {
  return (
    <div className="SingleShoutout">
      <h3 className="boldTo">Shout out to {shoutout.to}</h3>
      <p>- from: {shoutout.from}</p>
      <p className="theShoutout">{shoutout.shoutout}</p>
    </div>
  );
};

export default SingleShoutout;
