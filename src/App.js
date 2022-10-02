import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Signup/Login";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // capturing auth state change to divide the app
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);
  return (
    <div className="app">
      {user ? (
        <div className="dashb">
          <button className="btn-solid" onClick={() => auth.signOut()}>
            Signout
          </button>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
