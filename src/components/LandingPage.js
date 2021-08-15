import React from "react";
import styled from "styled-components";
import bckg from "../components/tlo.jpg";

import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';

import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TimerIcon from "@material-ui/icons/Timer";
import ExposureIcon from "@material-ui/icons/Exposure";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-image: url(${bckg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
  background-color: #bbb;
  margin: 60px 30px;
  transition: .2s;
  border-radius: 20px;
  &:hover {
    background-color: #ccc;

  }
`;
const P = styled.p`
  font-size: 12px;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
`;
const H1 = styled.p`
  text-transform: uppercase;
  font-size: 18px;
`;
const Newsletter = styled.div`
display: flex;
background-color: rgba(255,255,255,40%);
`;
const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Tile = (props) => {
  return (
    <TileWrap>
      <div>{props.icon}</div>
      <H1>{props.pageName}</H1>
      <P>{props.description}</P>
    </TileWrap>
  );
};
const Icons = () => {
  return (
    <Wrapper>
      <Tile
        pageName="O mnie"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?
"
        icon={<EmojiPeopleIcon className="svg_icons" color="primary" />}
      />
      <Tile
        pageName="Stoper"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?
"
        icon={<TimerIcon className="svg_icons" color="primary" />}
      />
      <Tile
        pageName="Licznik"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?
"
        icon={<ExposureIcon className="svg_icons" color="primary" />}
      />
      <Tile
        pageName="Lista postaci"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?
"
        icon={<LibraryBooksIcon className="svg_icons" color="primary" />}
      />
      <Tile
        pageName="Zarejestruj się"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?
"
        icon={<LibraryAddIcon className="svg_icons" color="primary" />}
      />
      <Tile
        pageName="Zaloguj się"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?
"
        icon={<LibraryAddCheckIcon className="svg_icons" color="primary" />}
      />
    </Wrapper>
  );
};

const LandingInfo = ()=>{
  return(
    <Wrap>
    <h1>We design your space</h1>
  
    <Newsletter>
    <Button variant="outlined" size="large">Chcę otrzymywać newsletter</Button>
    <TextField id="filled-basic" label="Filled" variant="outlined"></TextField>
    </Newsletter>
    </Wrap>
  )
}

const LandingPage = () => {
  return (
    <>
      <Title>
        <LandingInfo/> 
      </Title>
      <Icons />
    </>
  );
};

export default LandingPage;
