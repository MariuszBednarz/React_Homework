import React from "react";
import styled from "styled-components";

import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TimerIcon from "@material-ui/icons/Timer";
import ExposureIcon from "@material-ui/icons/Exposure";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import { useHistory } from "react-router";


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
  background-color: #bbb;
  margin: 60px 30px;
  transition: 0.2s;
  border-radius: 20px;
  &:hover {
    background-color: #ccc;
  }
`;
const P = styled.p`
  font-size: 12px;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
`;
const H1 = styled.p`
  text-transform: uppercase;
  font-size: 18px;
`;



//mapowanie przez kafelki w oparciu o dane z tablicy :)

const Icons = () => {
  const arrIcons = [
  
    {
      key: "1",
      pageName: "O mnie",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?",
      icon: <EmojiPeopleIcon className="svg_icons" color="primary" />,
      link: () => history.push('/about')
    },
    {
      key: "2",
      pageName: "Stoper",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?",
      icon: <TimerIcon className="svg_icons" color="primary" />,
      link: () => history.push('/Stoper')
    },
    {
      key: "3",
      pageName: "Licznik",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?",
      icon: <ExposureIcon className="svg_icons" color="primary" />,
      link: () => history.push('/Counter')
    },
    {
      key: "4",
      pageName: "Lista postaci",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?",
      icon: <LibraryBooksIcon className="svg_icons" color="primary" />,
      link: () => history.push('/List')
    },
    {
      key: "5",
      pageName: "Rejestracja",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?",
      icon: <LibraryAddIcon className="svg_icons" color="primary" />,
      link: () => history.push('/Register'),
    },
    {
      key: "6",
      pageName: "Logowanie",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus?",
      icon: <LibraryAddCheckIcon className="svg_icons" color="primary" />,
      link: () => history.push('/Login'),
    },
  ];

  const history = useHistory();

  return (
    <Wrapper>
      {arrIcons.map((Icon) => {
        return <TileWrap key={Icon.key} onClick = {Icon.link}>
          <P>{Icon.icon}</P> 
          <H1>{Icon.pageName}</H1> 
          <P>{Icon.description}</P>
        </TileWrap>
      })}
    </Wrapper>
  );
};

export default Icons;
