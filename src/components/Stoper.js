import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;
const Timetable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  background-color: #a2b9bc;
  border-bottom: 5px #c4dbde solid;
  border-top: 5px #80979a solid;
  border-left: 5px #c4dbde solid; 
  border-right: 5px #80979a solid;
  border-radius: 5px;
  margin: 20px;
`;
const NumberSpan = styled.span`
  margin: 5px;
`;
const Btn = styled.button`
  width: 100px;
  height: 20px;
  background-color: #fff;
  border: 2px #a2b9bc solid;
  margin: 10px;
  transition: 0.2s;
  &:hover {
    background-color: #8d7db7;
    color: #fff;
  }
  &:active {
    border: 3px solid red;
  }
`;
const P = styled.p`
  font-size: 12px;
`;
const Div = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 50vw;
height: 100px;
`;
const DisplayTime = (props) => {
  return (
    <Timetable>
      <NumberSpan>
        {props.time.h >= 10 ? props.time.h : `0${props.time.h}`} :
      </NumberSpan>
      <NumberSpan>
        {props.time.m >= 10 ? props.time.m : `0${props.time.m}`} :
      </NumberSpan>
      <NumberSpan>
        {props.time.s >= 10 ? props.time.s : `0${props.time.s}`} :
      </NumberSpan>
      <NumberSpan>
        {props.time.ms >= 10 ? props.time.ms : `0${props.time.ms}`}
      </NumberSpan>
    </Timetable>
  );
};
const DisplayButtons = (props) => {
  return (
    <>
      <div>
        {props.status === 0 ? <Btn onClick={props.start}> Start </Btn> : ""}
        {props.status === 1 ? <Btn onClick={props.stop}> Stop </Btn> : ""}
      </div>
      <Btn onClick={props.reset}> Reset </Btn>
    </>
  );
};
const Stoper = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const [input, setInput] = useState({
    inputSecValue: 1,
    inputMinValue: 1,
    inputHrValue: 1,
  });

  const DisplayInputs = () => {
    const handleSecChange = (e) => {
      console.log(e.target.value);
      setInput({ inputSecValue: parseInt(e.target.value) });
    };
    return (
      <>
        <Div>
          <input
            type="number"
            id="sec"
            placeholder="wpisz sekundy"
            onChange={handleSecChange}
          />
          <P>odliczaj co {input.inputSecValue} s</P>
        </Div>
      </>
    );
  };
  const start = () => {
    math();
    setStatus(1);
    setInterv(setInterval(math, 10));
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(0);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  let realMs = time.ms,
    realS = time.s,
    realM = time.m,
    realH = time.h;

  const math = () => {
    if (realM >= 59) {
      realH++;
      realM = 0;
    }
    if (realS >= 59) {
      realM++;
      realS = 0;
    }
    if (realMs >= 99) {
      realS += input.inputSecValue;
      realMs = 0;
    }
    realMs++;
    return setTime({ ms: realMs, s: realS, m: realM, h: realH });
  };
  return (
    <Wrap>
      <DisplayTime time={time} />
      <DisplayButtons status={status} start={start} stop={stop} reset={reset} />
      <DisplayInputs input={input} />
    </Wrap>
  );
};

export default Stoper;
