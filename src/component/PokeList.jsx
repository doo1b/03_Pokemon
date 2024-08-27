import React from "react";
import PokeCard from "./PokeCard";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

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
  const dispatch = useDispatch();
  const selectPokemon = useSelector((state) => state.pokemon.selectPokemon);

  const handleAdd = (pokemon) => {
    dispatch(addPokemon(pokemon));
  };
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
