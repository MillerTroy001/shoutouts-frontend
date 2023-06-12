import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import UserShoutouts from "./components/UserShoutouts";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:name" element={<UserShoutouts />} />
          <Route path="/me" element={user ? <UserShoutouts /> : <Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
