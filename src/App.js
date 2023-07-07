import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCrown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Colorful from "react-colorful";

const Wrapper = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
`;

const StyledButton = styled.button`
  background-color: #ff6633;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  p {
    margin-left: 10px;
  }
`;

const ManagerIcon = styled(FontAwesomeIcon)`
  color: #ff6633;
  margin-right: 5px;
`;

const UserIcon = styled(FontAwesomeIcon)`
  color: #333;
  margin-right: 5px;
`;

function App() {
  const [names, setNames] = useState([]);

  const generateNames = (includeDylan) => {
    const options = includeDylan ? names.concat("Dylan") : names;
    let randomNames = [];

    while (randomNames.length < (includeDylan ? 5 : 4)) {
      const randomName = options[Math.floor(Math.random() * options.length)];

      if (!randomNames.includes(randomName)) {
        randomNames.push(randomName);
      }
    }

    let randomNamesWithManagers = randomNames.map((name, index) => {
      if (index === 0) {
        return {
          name: name,
          isManager: true,
        };
      } else {
        return {
          name: name,
          isManager: false,
        };
      }
    });

    setNames(randomNamesWithManagers);
  };

  return (
    <Wrapper>
      <Title>Random Name App</Title>
      <StyledButton onClick={() => generateNames(false)}>
        Generate 4 Random Names
      </StyledButton>
      <StyledButton onClick={() => generateNames(true)}>
        Generate 5 Random Names with Dylan
      </StyledButton>
      {names.map((item, index) => (
        <NameContainer key={index}>
          {item.isManager ? (
            <ManagerIcon icon={faCrown} />
          ) : (
            <UserIcon icon={faUser} />
          )}
          <p>{item.name}</p>
        </NameContainer>
      ))}
    </Wrapper>
  );
}

export default App;

