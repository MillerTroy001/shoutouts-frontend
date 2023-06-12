import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import "./NewSOForm.css";
import { addAShoutout } from "../services/shoutoutApiService";
import AuthContext from "../context/AuthContext";
import Shoutout from "../models/Shoutout";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebaseConfig";

interface Props {
  refresh: () => void;
  name?: string;
}

const NewSOForm = ({ refresh, name }: Props) => {
  const { user } = useContext(AuthContext);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutout, setShoutout] = useState("");
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const newShoutout: Shoutout = { to, from, shoutout };
    const someFiles = fileUploadRef.current?.files;
    if (someFiles && someFiles[0]) {
      console.log(someFiles[0]);
      const newFile = someFiles[0];
      const storageRef = ref(storage, newFile.name);
      uploadBytes(storageRef, newFile).then((snapshot) => {
        console.log(snapshot.ref.fullPath);
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          newShoutout.shoutoutPHoto = url;
          if (user && user.photoURL) {
            newShoutout.authorPhoto = user.photoURL;
          }
          addAShoutout(newShoutout).then((res) => {
            console.log(res);
            refresh();
            setTo("");
            setFrom("");
            setShoutout("");
          });
        });
      });
    }
  };

  useEffect(() => {
    if (user) {
      setFrom(user?.displayName || "");
    } else {
      setFrom("");
    }
  }, [user]);

  useEffect(() => {
    if (name) {
      setTo(name || "");
    } else {
      setFrom("");
    }
  }, [name]);

  return (
    <form className="NewSOForm" onSubmit={submitHandler}>
      <h2>Leave a Shout Out</h2>
      <label htmlFor="to">To:</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From:</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={user ? true : false}
      />
      <label htmlFor="shoutout">Shout Out:</label>
      <textarea
        name="shoutout"
        id="shoutout"
        cols={30}
        rows={10}
        value={shoutout}
        onChange={(e) => setShoutout(e.target.value)}
        disabled={name ? true : false}
      ></textarea>
      <label htmlFor="photo">Upload a photo</label>
      <input type="file" name="photo" id="photo" ref={fileUploadRef} />
      <button>Submit Shout Out</button>
    </form>
  );
};

export default NewSOForm;
