import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


import styled from "styled-components";
import Button from "@material-ui/core/Button"

import LandingPage from "./LandingPage";
import About from "./About";
import Stoper from "./Stoper";
import Counter from "./Counter";
import List from "./List";
import RegisterInput from "./Register";
import Login from "./Login";
import Icons from "./Icons"
import RegistrationConfirmation from "./RegistrationConfirmation"
import Logged from "./Logged";


const StyledLink = styled(Link)`
text-decoration: none;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
  return (
    <Router>
      <Wrapper>
        <Nav>
          <StyledLink to="/LandingPage" style={{textDecoration: "none"}}>
            <Button variant="contained" color="primary"  >Logo </Button>{" "}
          </StyledLink>
          <BtnWrap>
            <StyledLink to="/About">
              <Button variant="contained" color="primary">O mnie</Button>
            </StyledLink>
            <StyledLink to="/Stoper">
              <Button variant="contained" color="primary">Stoper</Button>
            </StyledLink>
            <StyledLink to="/Counter">
              <Button variant="contained" color="primary">Licznik</Button>
            </StyledLink>
            <StyledLink to="/List">
              <Button variant="contained" color="primary">Lista</Button>
            </StyledLink>
            <StyledLink to="/Register">
              <Button variant="contained" color="primary">Rejestruj</Button>
            </StyledLink>
            <StyledLink to="/Login">
              <Button variant="contained" color="primary">Zaloguj</Button>
            </StyledLink>
          </BtnWrap>
        </Nav>
        <Route path="/LandingPage" component={LandingPage}> 
        
        <LandingPage />
        <Icons />

        </Route>
        <Route path="/About"  component={About} />
        <Route path="/Stoper" component={Stoper} />
        <Route path="/Counter" component={Counter} />
        <Route path="/List" component={List} />
        <Route path="/Register" component={RegisterInput} />
        <Route path="/Login" component={Login} />
        <Route path="/RegistrationConfirmation" component={RegistrationConfirmation} />
        <Route path="/Logged" component={Logged} />

      </Wrapper>
    </Router>
  );
};


export default Routing;
