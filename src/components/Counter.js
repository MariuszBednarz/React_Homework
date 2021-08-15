import React, { useState } from "react";
import styled from "styled-components";

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
    background-color: #493973;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Btn = styled.button`
    width: 150px;
    height: 50px;
    font-size: 24px;
    border: 2px solid #a2b9bc;
    background-color: #6b5b95;
    margin: 20px;
    border-radius: 20px;
    transition: 0.2s;
    &:hover {
      background-color: #8d7db7;
      border-radius: 10px;
    }
    &:active {
      background-color: #fff;
    }
  `;
  return (
    <>
      <CounterWrap>
        <div>
          <Btn onClick={remove}>-1</Btn>
          <Btn onClick={reset}>reset</Btn>
          <Btn onClick={add}>+1</Btn>
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
