import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./LandingPage";
import About from "./About";
import Stoper from "./Stoper";
import Counter from "./Counter";
import List from "./List";
import Register from "./Register";
import Login from "./Login";

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
background-color: #6b5b95;
height: 100px;
`;

const NavBtn = styled.button`
height: 50px;
width: 100px;
`;
const BtnWrap = styled.div`

`;

const Routing = () => {
  return (
    <Router>
      <Wrapper>
        <Nav>
            <NavBtn> <Link to="/LandingPage"> Logo </Link></NavBtn>
            <BtnWrap>
                <NavBtn> <Link to="/About"> O mnie </Link></NavBtn>
                <NavBtn> <Link to="/Stoper"> Stoper </Link></NavBtn>
                <NavBtn> <Link to="/Counter"> Licznik </Link></NavBtn>
                <NavBtn> <Link to="/List"> Lista </Link></NavBtn>
                <NavBtn> <Link to="/Register"> Rejestruj </Link></NavBtn>
                <NavBtn> <Link to="/Login"> Zaloguj </Link></NavBtn>
            </BtnWrap>
        </Nav>
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/About" component={About} />
        <Route path="/Stoper" component={Stoper} />
        <Route path="/Counter" component={Counter} />
        <Route path="/List" component={List} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Wrapper>
    </Router>
  );
};

//komponenty


export default Routing;
