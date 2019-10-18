import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import axiosWithAuth from "./axios/axiosWithAuth";


function App() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
      axiosWithAuth().get("http://localhost:5000/api/colors")
      .then(res => {
        console.log("response from colors endpoint", res);
          setBubbles(res.data);
      })
      .catch(err => {
        console.log("err from colors endpoint", err);
      })

  }, []);

  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <Login
              setLoginDetails={setLoginDetails}
              loginDetails={loginDetails}
              {...props}
            />
          )}
        />
        <PrivateRoute path="/bubble-page" setBubbles={setBubbles} bubbles={bubbles}  component={BubblePage}/>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
