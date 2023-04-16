import { LOGIN_PAGE, PROFILE_PAGE } from "./config/pages";
import { useState } from "react";
import "./styles/App.css";
import SignIn from "./pages/signIn";
import Profile from "./pages/profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={LOGIN_PAGE} element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path={PROFILE_PAGE} element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
