import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className="Header">
      <div>
        <h1>Shout Out App</h1>
      </div>
      <div className="header-login">
        {user ? (
          <div className="logged-in">
            <img src={user.photoURL || ""} alt="profile" />
            <p>Welcome, {user?.displayName}</p>
          </div>
        ) : (
          <p>Please sign in</p>
        )}

        {user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        )}
      </div>
    </header>
  );
};

export default Header;
