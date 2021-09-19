import React from "react";
import styled from "styled-components";

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

const Logged = () => {
  return <Wrapper><InputWrap>Jesteś zalogowany</InputWrap></Wrapper>;
};

export default Logged;