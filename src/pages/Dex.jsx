import React from "react";
import styled from "styled-components";
import Dashboard from "../component/Dashboard";
import PokeList from "../component/PokeList";
import MOCK_DATA from "../mock";
import { useState } from "react";

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
  const [selectPokemon, setSelectPokemon] = useState([]);

  const delPokemon = (id) => {
    setSelectPokemon((pokemon) => pokemon.filter((p) => p.id !== id));
  };

  const addPokemon = (pokemon) => {
    selectPokemon.some((p) => p.id === pokemon.id)
      ? alert("같은 포켓몬은 중복으로 등록할 수 없습니다.")
      : selectPokemon.length >= 6
      ? alert("최대 6개의 포켓몬만 등록할 수 있습니다")
      : setSelectPokemon((prev) => [...prev, pokemon]);
  };

  console.log(MOCK_DATA.map((pokemon) => pokemon.types));

  return (
    <MainBox>
      <Dashboard selectPokemon={selectPokemon} delPokemon={delPokemon} />
      <PokeList
        pokelist={MOCK_DATA}
        addPokemon={addPokemon}
        selectPokemon={selectPokemon}
      />
    </MainBox>
  );
}

export default Dex;
