import React from "react";
import PokeCard from "./PokeCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
  const selectPokemon = useSelector((state) => state.pokemon.selectPokemon);

  return (
    <>
      <ListBox>
        {pokelist.map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.korean_name}
              pokemon={pokemon}
              isSelect={selectPokemon.some((p) => p.id === pokemon.id)}
            />
          );
        })}
      </ListBox>
    </>
  );
};

export default PokeList;
