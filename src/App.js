import React from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from './Pages/ViewPost'
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Post  from "./store/PostContext";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { useEffect } from "react";
import { AuthContext , firebaseContext } from "./store/Context";
import { useContext } from "react";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
    });
  });
  return (
    <div>
      <Post>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
  
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
      </Post>
    </div>
  );
}
export default App ;