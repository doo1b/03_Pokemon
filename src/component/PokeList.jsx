import React from "react";
import PokeCard from "./PokeCard";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext ";

const ListBox = styled.div`
  margin-top: 20px;
  width: 1200px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 25px 25px;
  justify-content: center;
  align-items: center;
`;

const PokeList = ({ pokelist }) => {
  const { addPokemon, selectPokemon } = usePokemon();
  return (
    <>
      <ListBox>
        {pokelist.map((pokemon, index) => {
          return (
            <PokeCard
              key={pokemon.korean_name}
              pokemon={pokemon}
              addPokemon={addPokemon}
              isSelect={selectPokemon.some((p) => p.id === pokemon.id)}
            />
          );
        })}
      </ListBox>
    </>
  );
};

export default PokeList;
