import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";

interface Props {
  shoutoutArray: Shoutout[];
}

const ShoutoutList = ({ shoutoutArray }: Props) => {
  return (
    <div className="ShoutoutList">
      {shoutoutArray.map((shoutout) => (
        <SingleShoutout key={shoutout._id} shoutout={shoutout} />
      ))}
    </div>
  );
};

export default ShoutoutList;
