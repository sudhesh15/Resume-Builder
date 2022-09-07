import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login/login_component";
import SignUp from "./components/Login/signup_component";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        <Routes>
          <Route path="/ResumeBuilder" element={< ResumeBuilder/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
