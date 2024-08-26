import React from "react";
import styled from "styled-components";
import Dashboard from "../component/Dashboard";
import PokeList from "../component/PokeList";
import MOCK_DATA from "../mock";

const MainBox = styled.div`
  max-width: 1200px;
  width: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 10px;
  padding: 20px 40px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Dex() {
  return (
    <MainBox>
      <Dashboard />
      <PokeList pokelist={MOCK_DATA} />
    </MainBox>
  );
}

export default Dex;
