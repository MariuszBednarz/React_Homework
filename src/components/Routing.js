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
width: 100px;
    height: 50px;
    font-size: 18px;
    border: 2px solid #a2b9bc;
    background-color: #6b5b95;
    margin: 10px;
    border-radius: 20px;
    text-transform: uppercase;
    transition: 0.2s;

    text-decoration: none;

    color:#a2b9bc ;
    &:hover {
      background-color: #8d7db7;
      border-radius: 10px;
    }
    &:active {
      background-color: #fff;
    }
`;
const BtnWrap = styled.div`

`;

const bio = {
  name: "Mariusz",
  surname: "Bednarz",
  biogram:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint nobis, voluptas ducimus dolor voluptatum quae cumque dignissimos delectus temporibus!",
};
const Routing = () => {
  return (
    <Router>
      <Wrapper>
        <Nav>
            <Link to="/LandingPage"><NavBtn>Logo </NavBtn>  </Link>
            <BtnWrap>
                 <Link to="/About"><NavBtn>O mnie</NavBtn></Link>
                 <Link to="/Stoper"><NavBtn>Stoper</NavBtn></Link>
                 <Link to="/Counter"><NavBtn>Licznik</NavBtn></Link>
                 <Link to="/List"><NavBtn>Lista</NavBtn></Link>
                 <Link to="/Register"><NavBtn>Rejestruj</NavBtn></Link>
                 <Link to="/Login"><NavBtn>Zaloguj</NavBtn></Link>
            </BtnWrap>
        </Nav>
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/About" props ={bio} component={About} />
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

