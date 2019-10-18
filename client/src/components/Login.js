import React from "react";
import axios from "axios";
import {StyledButton, StyledForm, StyledInput, StyledDiv, StyledH1} from "../Styles";

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
    <StyledDiv>
      <StyledH1>Welcome to the Bubble App!</StyledH1>
      <StyledForm>
        <h4>Login to continue</h4>
        <label>Username</label>
        <StyledInput onChange={valueChange} name="username" type="text"/>
        <label>Passord</label>
        <StyledInput onChange={valueChange} name="password" type="password"/>
        <StyledButton onClick={submitUserDetails}>Submit</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Login;
