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

const PokeList = ({ pokelist, addPokemon }) => {
  console.log(pokelist);
  return (
    <>
      <ListBox>
        {pokelist.map((pokemon, index) => {
          return (
            <PokeCard key={index} pokemon={pokemon} addPokemon={addPokemon} />
          );
        })}
      </ListBox>
    </>
  );
};

export default PokeList;
