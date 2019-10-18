import React from "react";
import axios from "axios";

const Login = (props) => {
  const { loginDetails, setLoginDetails } = props;
  const valueChange = e => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const submitUserDetails = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginDetails)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => {
        console.log("error from server", err);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <label>Username</label>
        <input onChange={valueChange} name="username" type="text"/>
        <label>Passord</label>
        <input onChange={valueChange} name="password" type="password"/>
        <button onClick={submitUserDetails}>Submit</button>
      </form>
    </>
  );
};

export default Login;
