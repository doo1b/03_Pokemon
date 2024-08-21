import React from "react";
import styled from "styled-components";
import PokeBox from "./PokeBox";
import PokeList from "./PokeList";
import MOCK_DATA from "../mock";

const MainBox = styled.div`
  width: 1200px;
  height: fit-content;
  background-color: white;
  border-radius: 10px;
  padding: 20px 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Dex() {
  return (
    <MainBox>
      <PokeBox />
      <PokeList pokelist={MOCK_DATA} />
    </MainBox>
  );
}

export default Dex;
