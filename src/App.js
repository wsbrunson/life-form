import { Router } from "@reach/router";
import AppState from "./AppState";
import Form from "./Form";
import Home from "./Home";
import React from "react";
import styled from "react-emotion";

const AppContainer = styled.div`
  background-color: rgb(243, 243, 243);
  height: 100vh;
`;

const AppHeader = styled.header`
  padding: 20px;
`;

const AppHeading = styled.h1`
  color: #222;
  font-style: italic;
  text-shadow: 4px 4px 0 #ddd;
  font-size: 3rem;
  text-align: center;
`;

const AppMain = styled.main`
  background-color: rgb(243, 243, 243);
`;

const App = () => (
  <AppState>
    {({ data, addData }) => (
      <AppContainer>
        <AppHeader>
          <AppHeading>Life-Form</AppHeading>
        </AppHeader>
        <AppMain>
          <Router>
            <Home path="/" data={data} />
            <Form path="/add" addData={addData} />
          </Router>
        </AppMain>
      </AppContainer>
    )}
  </AppState>
);

export default App;
