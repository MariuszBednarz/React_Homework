import React, { useState } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button"


const Counter = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [resets, setResets] = useState(0);
  const add = () => {
    setNumber(number + 1);
    setResult(result + 1);
  };
  const remove = () => {
    setNumber(number - 1);
    setResult(result + 1);
  };
  const reset = () => {
    setNumber(0);
    setResult(result + 1);
    setResets(resets + 1);
  };

  const ResultWrap = styled.div`
    font-size: 24px;
    text-transform: uppercase;
    margin: 20px;
    color: #878f99;
  `;
  const Result = styled.p`
    color: ${number !== 0 && number % 5 === 0 ? "green" : "#878f99"};
  `;
  const CounterWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
 
  return (
    <>
      <CounterWrap>
        <div>
          <Button variant="contained" color="secondary" onClick={remove}>-1</Button>
          <Button variant="contained" color="secondary" onClick={reset}>reset</Button>
          <Button variant="contained" color="secondary" onClick={add}>+1</Button>
        </div>
        <ResultWrap>
          <Result>wynik: {number} </Result>
          <p>kliki: {result} </p>
          <p>resety: {resets} </p>
        </ResultWrap>
      </CounterWrap>
    </>
  );
};

export default Counter;
