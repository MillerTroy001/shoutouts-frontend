import "./App.css";
import ShoutoutList from "./components/ShoutoutList";
import { useEffect, useState } from "react";
import Shoutout from "./models/Shoutout";
import { getAllShoutouts } from "./services/shoutoutApiService";
import NewSOForm from "./components/NewSOForm";

function App() {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>([]);

  const keepinItFresh = () => {
    getAllShoutouts().then((res) => {
      setAllShoutouts(res);
    });
  };

  useEffect(() => {
    keepinItFresh();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>All Shout Outs</h1>
      </header>

      <ShoutoutList shoutoutArray={allShoutouts} />
      <NewSOForm refresh={keepinItFresh} />
    </div>
  );
}

export default App;
