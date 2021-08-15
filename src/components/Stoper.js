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
  margin: 20px;
`;
const NumberSpan = styled.span`
  margin: 5px;
`;
const Btn = styled.button`
  width: 100px;
  height: 20px;
  background-color: #fff;
  border: 1px #a2b9bc solid;
  margin: 10px;
`;
const Inps = styled.input`
margin:10px;
`;

const DisplayTime = (props) => {
  return (
    <Timetable>
      <NumberSpan>
        {props.time.h >= 10 ? props.time.h : `0${props.time.h}`} :{" "}
      </NumberSpan>
      <NumberSpan>
        {props.time.m >= 10 ? props.time.m : `0${props.time.m}`} :{" "}
      </NumberSpan>
      <NumberSpan>
        {props.time.s >= 10 ? props.time.s : `0${props.time.s}`} :{" "}
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

  const [input, setInput] = useState({inputSecValue: 1, inputMinValue: 1, inputHrValue: 1 })


  const DisplayInputs = () => {
    const handleSecChange = (e)=>{
        console.log(e.target.value)
        setInput({inputSecValue: e.target.value})
    }
        //Tu się zaciąłem. Nie bardzo wiem jak przekazać input do hooka setInput a następnie do funkcji math. W console log wartosć się zmienia, ale nie jest podawana dalej.

  return (
    <>
      <Inps type="number" name="" id="sec"  placeholder="sec" onChange={handleSecChange}/>
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
    if (realM === 59) {
      realH ++;
      realM = 0;
    }
    if (realS === 59) {
    //tu chciałem przekazać wartości z hooka setInput
      realM += input.inputSecValue;
      realS = 0;
    }
    if (realMs === 99) {
      realS++;
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
