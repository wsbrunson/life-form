import { Button } from "./components";
import { navigate } from "@reach/router";
import React from "react";
import styled from "react-emotion";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = ({ data }) => (
  <HomeContainer>
    <Button
      onClick={() => {
        navigate("/add/");
      }}
    >
      Add Data
    </Button>
    <div>
      {data.map(thing => (
        <p>{JSON.stringify(thing)}</p>
      ))}
    </div>
  </HomeContainer>
);

export default Home;
