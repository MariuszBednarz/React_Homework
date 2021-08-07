import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.div`
  height: 150vh;
  background-color: #878f99 ;
`
const Tiles = styled.div`
  height: 50vh;
  background-color: #a2b9bc;
`

function LandingPage() {
  return (
    <Wrapper>
      <Title>LandingPage</Title>
      <Tiles>
      </Tiles>
    </Wrapper>
  );
}

export default LandingPage;
