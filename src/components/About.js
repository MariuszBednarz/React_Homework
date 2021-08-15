import styled from "styled-components";
import React from "react";
import img from "../components/portrait.jpg";

const Biogram = ({ firstName, lastName, biogram }) => {
  return (
    <div>
      <p>
        Na imię mi {firstName} {lastName}
      </p>
      <p>{biogram}</p>
    </div>
  );
};

const About = () => {

  const BioWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #a2b9bc;
  `;
  const Photo = styled.div`
    width: 300px;
    height: 300px;
    background-color: #b2ad7f;
    border-radius: 50%;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
  `;
  const Bio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 400px;
    height: 200px;
    background-color: #b3cacd;
    margin: 30px;
    padding: 20px;
    color: #6b5b95;
    font-size: 24px;
  `;
console.log()
  return (
    <BioWrapper>
      <Photo></Photo>
      <Bio>
        <Biogram firstName="Mariusz" lastName="Bednarz" biogram = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, assumenda?" />
      </Bio>
    </BioWrapper>
  );
};

export default About;
