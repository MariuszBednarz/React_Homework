import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import Alert from "@mui/material/Alert";

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

const Login = () => {
  let [inputName, setInputName] = useState();
  let [inputSecondName, setInputSecondName] = useState();
  let [inputPassword, setInputPassword] = useState();
  const [userDatabase, setUserDatabase] = useState([]);
  const history = useHistory();

  let [nameFilled, setNameFilled] = useState(false);
  let [secNameFilled, setSecNameFilled] = useState(false);
  let [passFilled, setPassFilled] = useState(false);
  let [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/users`).then((response) => {
      const userDatabase = response.data;
      setUserDatabase(userDatabase);
    });
  });


  const handleLoginSubmit = () => {
    console.log("działa");
    if (inputName !== undefined) {
      setNameFilled(true);
    } else setNameFilled(false);
    if (inputSecondName !== undefined) {
      setSecNameFilled(true);
    } else setSecNameFilled(false);
    if (inputPassword !== undefined) {
      setPassFilled(true);
    } else setPassFilled(false);

    let loginSuccessfull = false;
    userDatabase.map((user) =>
      user.name === inputName &&
      user.secondName === inputSecondName &&
      user.password === inputPassword
        ? (loginSuccessfull = true)
        : loginSuccessfull = false
    );

    if (loginSuccessfull) {
      history.push(`/Logged`);
    } else {
      setError(true)
    }
  };

  const handleNameInput = (e) => {
    setInputName(e.target.value);
  };
  const handleSecondNameInput = (e) => {
    setInputSecondName(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setInputPassword(e.target.value);
  };

  return (
    <Wrapper id="login1">
      <h3>Zaloguj się</h3>
      <InputWrap>
        <label htmlFor="name">Imię</label>
        <TextField
          type="text"
          name="name"
          placeholder="imię"
          variant="outlined"
          onChange={handleNameInput}
        />
      </InputWrap>
      <InputWrap>
        <label htmlFor="secondName">Nazwisko</label>
        <TextField
          type="text"
          name="secondName"
          placeholder="nazwisko"
          variant="outlined"
          onChange={handleSecondNameInput}
        />
      </InputWrap>
      <InputWrap>
        <label htmlFor="password">Hasło</label>
        <TextField
          type="password"
          name="secondName"
          placeholder="hasło"
          variant="outlined"
          onChange={handlePasswordInput}
        />
      </InputWrap>

      <Button
        type="submit"
        form="login1"
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleLoginSubmit}
      >
        Zaloguj
      </Button>
      <InputWrap>
        {nameFilled ? "" : <Alert severity="warning">Podaj Imię</Alert>}
        {secNameFilled ? "" : <Alert severity="warning">Podaj Nazwisko</Alert>}
        {passFilled ? "" : <Alert severity="warning">Podaj Hasło</Alert>}

      </InputWrap>
      {error ? <Alert severity="error">Użytkownik nie istnieje</Alert> : "" }

    </Wrapper>
  );
};

export default Login;
