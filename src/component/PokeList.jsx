import React from "react";
import PokeCard from "./PokeCard";
import styled from "styled-components";

const ListBox = styled.div`
  margin-top: 20px;
  width: 1200px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 25px 25px;
  justify-content: center;
`;

const PokeList = ({ pokelist, addPokemon, selectPokemon }) => {
  return (
    <>
      <ListBox>
        {pokelist.map((pokemon, index) => {
          return (
            <PokeCard
              key={index}
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
