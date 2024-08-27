import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delPokemon } from "../redux/slices/pokemonSlice";
import SelectPokemonCard from "./SelectPokemonCard";

const InputBox = styled.div`
  width: 1200px;
  height: fit-content;
  border: 3px dashed #ffc8c8;
  border-radius: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(6, 200px);
  justify-content: space-around;
  justify-items: center;
  padding: 20px 10px;
`;

const Title = styled.p`
  margin: 70px 0;
  font-size: 50px;
`;

const PokeBall = styled.img`
  width: 100px;
  margin: 50px 0;
`;

const Dashboard = () => {
  const selectPokemon = useSelector((state) => state.pokemon.selectPokemon);
  const dispatch = useDispatch();

  const maxPokemonCount = 6;

  return (
    <>
      <Title>나만의 포켓몬</Title>
      <InputBox>
        {selectPokemon.map((pokemon) => (
          <SelectPokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            delPokemon={() => dispatch(delPokemon(pokemon.id))}
          />
        ))}

        {Array.from({ length: maxPokemonCount - selectPokemon.length }).map(
          (_, index) => (
            <PokeBall
              key={`ball-${index}`}
              src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
            />
          )
        )}
      </InputBox>
    </>
  );
};

export default Dashboard;
