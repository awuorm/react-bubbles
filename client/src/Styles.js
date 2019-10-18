import styled from "styled-components";
import blowing from "./imgs/blowing.png";

export const StyledDiv = styled.div`
  text-align:center;
  width: 100vw;
  background-image: url(${blowing});
  color: aliceblue;
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
