import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
  background-color: #eee;
  margin: 60px 30px;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    transform: scale(1.1);
  }
`;
const P = styled.p`
  font-size: 14px;
  padding: 5px;
`;

const CharPage = () => {
  const [chars, setChars] = useState();
  let [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const responseChars = response.data;
        setChars(responseChars);
      });
  }, [page]);

  return (
    <Wrapper>
      {chars ? (

        //tu poniżej wpisane roboczo, żeby nie wywalało błędów. Właśnie w to miejsce chcę przekazać dane w którą postać kliknąłem
        <TileWrap key={chars.results.id}>
          <img src={chars.results.image} alt="portrait" width="60%" height="60%" />
          <P>Imię: {chars.results.name}</P>
          <P>Gatunek: {chars.results.species}</P>
          <P>Status: {chars.results.status}</P>
          <P>Pochodzenie: {chars.results.origin.name}</P>
        </TileWrap>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default CharPage;
