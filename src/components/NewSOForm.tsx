import { FormEvent, useState } from "react";
import "./NewSOForm.css";
import { addAShoutout } from "../services/shoutoutApiService";

interface Props {
  refresh: () => void;
}

const NewSOForm = ({ refresh }: Props) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutout, setShoutout] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await addAShoutout({ to, from, shoutout });
    refresh();
    setTo("");
    setFrom("");
    setShoutout("");
  };

  return (
    <form className="NewSOForm" onSubmit={submitHandler}>
      <h2>Leave a Shout Out</h2>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <label htmlFor="shoutout">Shout Out</label>
      <input
        type="text"
        name="shoutout"
        id="shoutout"
        value={shoutout}
        onChange={(e) => setShoutout(e.target.value)}
      />
      <button>Submit Shout Out</button>
    </form>
  );
};

export default NewSOForm;
