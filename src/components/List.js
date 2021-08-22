import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListWrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const BtnWrap = styled.div`
  text-align: center;
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

const ListContainer = () => {
  const [chars, setChars] = useState();
  let [page, setPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const responseChars = response.data;
        setChars(responseChars);
      });
  }, [page]);

  const next = () => {
    if (page >= chars.info.pages) {
      console.log(`ostatnia strona`);
    } else {
      setPage((page += 1));
      const nextPage = () => history.push(`/List?page=${page}`);
      nextPage();
    }
  };
  const prev = () => {
    if (page === 1) {
      console.log(`pierwsza strona`);
    } else {
      setPage((page -= 1));
      const prevPage = () => history.push(`/List?page=${page}`);
      prevPage();
    }
  };

  return (
    <Wrapper>
      <BtnWrap>
        <h4>
          Strona {page} / {chars ? chars.info.pages : "..."}
        </h4>

        <Button onClick={prev}>Poprzednia</Button>
        <Button onClick={next}>Następna</Button>
      </BtnWrap>
      <div>
        <label htmlFor="status">Status postaci: </label>
        <select name="status" id="status">
          <option value="alive">Żywa</option>
          <option value="dead">Martwa</option>
          <option value="unknow">Nieznany</option>
        </select>
      </div>

      <ListWrap>
        {chars ? (
          <>
            {chars.results.map((char) => {
              return (
                <TileWrap
                  key={char.id}
                  onClick={() => history.push(`/CharPage${char.id}`)}
                >
                  <img
                    src={char.image}
                    alt="portrait"
                    width="60%"
                    height="60%"
                  />
                  <P>Imię: {char.name}</P>
                  <P>Gatunek:{char.species}</P>
                  <P>Status: {char.status}</P>
                  <P>Pochodzenie: {char.origin.name}</P>
                </TileWrap>
              );
            })}
          </>
        ) : (
          <CircularProgress />
        )}
      </ListWrap>
    </Wrapper>
  );
};

const List = () => {
  return (
    <>
      <ListContainer />
    </>
  );
};

export default List;
