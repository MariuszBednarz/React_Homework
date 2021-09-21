import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, FormControlLabel, Switch, Button } from "@material-ui/core";
import styled from "styled-components";
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
  const [sortedChars, setSortedChars] = useState();
  const history = useHistory();
  let [page, setPage] = useState(1);
  let [listValue, setListValue] = useState("all");
  let [checkValue, setCheckValue] = useState(false);
  let [charKey, setCharKey] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const responseChars = response.data;
        setChars(responseChars);
        setSortedChars(responseChars.results);
      });
  }, [page]);

  const next = () => {
    if (page >= chars.info.pages) {
      console.log(`ostatnia strona`);
    } else {
      setPage((page += 1));
      //   Tutaj jestem w stanie zmienić stronę w linku, ale na pewno da się zrobić to lepiej. Klik zmienia stronę, ale wchodząc z przeglądarki np. na List?page=7, nie trafiam na 7 stronę.
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

  const handleSelect = (e) => {
    console.log("select", e.target.value);
    setListValue((listValue = e.target.value));
  };

  const handleChange = () => {
    const newCheckValue = !checkValue;
    setCheckValue(newCheckValue);
    const sortedChars = [...chars.results];
    sortedChars.sort((a, b) =>
      newCheckValue
      //tu dzięki radzie Mateusza działa
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    );

    setSortedChars(sortedChars);
    console.log(checkValue, sortedChars);
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
        <select name="status" id="status" onClick={handleSelect}>
          <option value="all">Wszystkie</option>
          <option value="Alive">Żywa</option>
          <option value="Dead">Martwa</option>
          <option value="unknown">Nieznany</option>
        </select>
      </div>
      <div>
        <FormControlLabel
          control={<Switch onChange={handleChange} />}
          label={checkValue ? `Wróć` : `Posortuj A-Z`}
        />
      </div>

      <ListWrap>
        {chars ? (
          <>
            {(checkValue ? sortedChars : chars.results)
              .filter((char) =>
                listValue === "all" ? true : char.status === listValue
              )
              .map((char) => {
                return (
                  <TileWrap
                    key={char.id}
                    onClick={() => history.push(`/CharPage${char.id}`)}
                    //   Już udaje mi się zrobić odnośnik do nowej strony po kliknięciu w portret, ale nie wiem czy tworzyć nowy komponent, czy jakoś mapować dane z api żeby wyświetlało jedną postać w oprarciu o pojedyncze ID. Jestem pewien że da się to prosto zrobić.
                  >
                    <img
                      src={char.image}
                      alt="portrait"
                      width="60%"
                      height="60%"
                    />
                    <P>Imię: {char.name}</P>
                    <P>Gatunek: {char.species}</P>
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
  return <ListContainer />;
};

export default List;
