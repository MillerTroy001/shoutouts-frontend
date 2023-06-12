import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";

interface Props {
  shoutoutArray: Shoutout[];
  update: () => void;
}

const ShoutoutList = ({ shoutoutArray, update }: Props) => {
  return (
    <div className="ShoutoutList">
      {shoutoutArray.map((shoutout) => (
        <SingleShoutout
          key={shoutout._id}
          shoutout={shoutout}
          update={update}
        />
      ))}
    </div>
  );
};

export default ShoutoutList;
