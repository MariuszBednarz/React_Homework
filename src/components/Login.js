import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;


const Login = () => (
  <Wrapper id="login1">
    <h3>Zaloguj się</h3>
    <InputWrap>
      <label htmlFor="name">Imię</label>
      <TextField type="text" name="name" placeholder="imię"  variant="outlined" />
    </InputWrap>
    <InputWrap>
      <label htmlFor="secondName">Nazwisko</label>
      <TextField type="text" name="secondName" placeholder="nazwisko" variant="outlined" />
    </InputWrap>
    <InputWrap>
      <label htmlFor="password">Hasło</label>
      <TextField type="password" name="secondName" placeholder="hasło" variant="outlined" />
    </InputWrap>

    <Button type="submit" form="login1" variant="contained" color="secondary" size="large"  >Zaloguj</Button>
  </Wrapper>
);

export default Login;
