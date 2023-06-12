import { useEffect, useState } from "react";
import { getAllShoutouts } from "../services/shoutoutApiService";
import "./Main.css";
import NewSOForm from "./NewSOForm";
import ShoutoutList from "./ShoutoutList";
import Shoutout from "../models/Shoutout";

const Main = () => {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>([]);

  const keepinItFresh = (): void => {
    getAllShoutouts().then((res) => {
      setAllShoutouts(res);
    });
  };

  useEffect(() => {
    keepinItFresh();
  }, []);

  return (
    <main className="Main">
      <NewSOForm refresh={keepinItFresh} />
      <h2>View All Shout Outs Below!</h2>
      <ShoutoutList shoutoutArray={allShoutouts} update={keepinItFresh} />
    </main>
  );
};

export default Main;
