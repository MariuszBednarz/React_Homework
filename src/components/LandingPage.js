import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 40px;
  background: papayawhip;
  border: solid 2px black;
`;

function LandingPage() {
  return (
    <Wrapper>
      <Title>Landing Page</Title>
    </Wrapper>
  );
}

export default LandingPage;
