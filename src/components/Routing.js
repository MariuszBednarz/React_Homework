import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useHistory } from "react-router";


import styled from "styled-components";
import Button from "@material-ui/core/Button";

import LandingPage from "./LandingPage";
import About from "./About";
import Stoper from "./Stoper";
import Counter from "./Counter";
import List from "./List";
import RegisterInput from "./Register";
import Login from "./Login";
import Icons from "./Icons";
import RegistrationConfirmation from "./RegistrationConfirmation";
import Logged from "./Logged";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
  background-color: #eee;
  transition: 0.2s;
  margin: auto;
  &:hover {
    background-color: #fff;
    transform: scale(1.1);
  }
`;
const P = styled.p`
  font-size: 14px;
  padding: 5px;
`;
const Nav = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ddd;
  height: 100px;
  z-index: 20;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
`;

const Routing = () => {
  const history = useHistory();
  const [list, setList] = useState(null);
  console.log("list", list?.results);
  return (
    <Router>
      <Wrapper>
        <Nav>
          <StyledLink to="/LandingPage" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Logo{" "}
            </Button>{" "}
          </StyledLink>
          <BtnWrap>
            <StyledLink to="/About">
              <Button variant="contained" color="primary">
                O mnie
              </Button>
            </StyledLink>
            <StyledLink to="/Stoper">
              <Button variant="contained" color="primary">
                Stoper
              </Button>
            </StyledLink>
            <StyledLink to="/Counter">
              <Button variant="contained" color="primary">
                Licznik
              </Button>
            </StyledLink>
            <StyledLink to="/List">
              <Button variant="contained" color="primary">
                Lista
              </Button>
            </StyledLink>
            <StyledLink to="/Register">
              <Button variant="contained" color="primary">
                Rejestruj
              </Button>
            </StyledLink>
            <StyledLink to="/Login">
              <Button variant="contained" color="primary">
                Zaloguj
              </Button>
            </StyledLink>
          </BtnWrap>
        </Nav>
        <Route path="/LandingPage" component={LandingPage}>
          <LandingPage />
          <Icons />
        </Route>
        <Route path="/About" component={About} />
        <Route path="/Stoper" component={Stoper} />
        <Route path="/Counter" component={Counter} />
        <Route path="/List">
          <List setList={setList} />
        </Route>
        <Route path="/Register" component={RegisterInput} />
        <Route path="/Login" component={Login} />
        <Route
          path="/RegistrationConfirmation"
          component={RegistrationConfirmation}
        />
        <Route path="/Logged" component={Logged} />
        {list?.results.map((character) => (
          <Route path={`/CharPage${character.id}`}>
            <div style={{display: "flex", margin: "auto", height: "100vh"}}>
              <TileWrap  key={character.id}>
                <img
                  src={character.image}
                  alt="portrait"
                  width="60%"
                  height="60%"
                />
                <P>Imię: {character.name}</P>
                <P>Gatunek: {character.species}</P>
                <P>Status: {character.status}</P>
                <P>Pochodzenie: {character.origin.name}</P>
              </TileWrap>
            </div>
          </Route>
        ))}
      </Wrapper>
    </Router>
  );
};

export default Routing;
