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

const RegisterInput = () => {
  let [inputName, setInputName] = useState();
  let [inputSecondName, setInputSecondName] = useState();
  let [inputPassword, setInputPassword] = useState();
  const [userDatabase, setUserDatabase] = useState([]);
  const history = useHistory();

  let [nameFilled, setNameFilled] = useState(false);
  let [secNameFilled, setSecNameFilled] = useState(false);
  let [passFilled, setPassFilled] = useState(false);

  let [alreadyRegisteredAlert, setAlreadyRegisteredAlert] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/users`).then((response) => {
      const userDatabase = response.data;
      setUserDatabase(userDatabase);
    });
  });

  const handleRegisterSubmit = () => {
    if (inputName !== undefined) {
      console.log("inputName", inputName);
      setNameFilled(true);
    } else setNameFilled(false);
    if (inputSecondName !== undefined) {
      console.log("inputSecName", inputSecondName);
      setSecNameFilled(true);
    } else setSecNameFilled(false);
    if (inputPassword !== undefined) {
      console.log("inputPassword", inputPassword);
      setPassFilled(true);
    } else setPassFilled(false);

    let registerSuccessfull = false;
    userDatabase.map((user) =>
      user.name === inputName &&
      user.secondName === inputSecondName &&
      user.password === inputPassword
        ? (registerSuccessfull = false)
        : registerSuccessfull = true
    );

  
      if (registerSuccessfull) {
        axios.post(`http://localhost:3000/users`, {
          id: ++userDatabase.length,
          name: inputName,
          secondName: inputSecondName,
          password: inputPassword,
        });
        history.push(`/RegistrationConfirmation`);
      } else {
        setAlreadyRegisteredAlert(true);
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
    <Wrapper id="register1">
      <h3>Zarejestruj si??</h3>
      <InputWrap>
        <label htmlFor="name">Imi??</label>
        <TextField
          type="text"
          name="name"
          placeholder="imi??"
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
        <label htmlFor="password">Has??o</label>
        <TextField
          type="password"
          name="secondName"
          placeholder="has??o"
          variant="outlined"
          onChange={handlePasswordInput}
        />
      </InputWrap>
      <Button
        type="submit"
        form="register1"
        variant="contained"
        color="primary"
        size="large"
        onClick={handleRegisterSubmit}
      >
        Zarejestruj
      </Button>
      <InputWrap>
        {nameFilled ? "" : <Alert severity="warning">Podaj Imi??</Alert>}
        {secNameFilled ? "" : <Alert severity="warning">Podaj Nazwisko</Alert>}
        {passFilled ? "" : <Alert severity="warning">Podaj Has??o</Alert>}
      </InputWrap>
      {alreadyRegisteredAlert ? 
       <Alert severity="error">
       Taki u??ytkownik ju?? istnieje - u??yj innych danych
     </Alert>
       : ""}
    </Wrapper>
  );
};

export default RegisterInput;
