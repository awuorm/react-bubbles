import styled from "styled-components";
import blowing from "./imgs/blowing.png";

export const StyledDiv = styled.div`
  text-align:center;
  width: 100vw;
  background-image: url(${blowing});
  color: aliceblue;
`;

export const StyledH1 = styled.h1`
border-bottom: 1px solid grey;
box-shadow: 0 8px 6px -6px black;
padding: 0.5em;
`;

export const StyledDivLogout = styled.div`
    margin: 1em;
    width: 100%;
`;

export const StyledLogout = styled.button`
  padding: 0.7em;
  width: 10vw;
  color: aliceblue;
  background-color: #8A2BE2;
  border: none;
  margin-left: 50vw;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
`;
export const StyledButton = styled.button`
  margin: 1em;
  padding: 0.7em;
  width: 25vw;
  color: aliceblue;
  background-color: #FFB90A;
  border: none;
`;

export const StyledButton2 = styled.button`
  margin: 1em;
  padding: 0.7em;
  width: 10vw;
  color: black;
  background-color: #FFB90A;
  border: none;
`;

export const StyledInput = styled.input`
  padding: 0.5em;
  width: 25vw;
`;
