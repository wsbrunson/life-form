import styled from "react-emotion";

export default styled.button`
  background-color: rgb(31, 31, 33);
  color: rgb(255, 255, 255);
  border: solid 2px rgb(255, 255, 255);
  width: 6rem;
  margin-right: 1rem;
  height: 2rem;
  font-family: sans-serif;
  font-size: 1rem;

  &:active {
    border-color: rgb(31, 31, 33);
    background-color: rgb(255, 255, 255);
    color: rgb(31, 31, 33);
  }
`;
