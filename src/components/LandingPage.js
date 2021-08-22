import React from "react";
import styled from "styled-components";


import bckg from "../components/tlo.jpg";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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

const Newsletter = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 40%);
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingInfo = () => {
  return (
    <Wrap>
      <h1>We design your space</h1>
      <Newsletter>
        <Button variant="outlined" size="large">
          Chcę otrzymywać newsletter
        </Button>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="outlined"
        ></TextField>
      </Newsletter>
    </Wrap>
  );
};

const LandingPage = () => {
  return (
    <>
      <Title>
        <LandingInfo />
      </Title>
      
    </>
  );
};

export default LandingPage;
