import React from "react";
import PokeCard from "./PokeCard";
import styled from "styled-components";

const ListBox = styled.div`
  width: 1200px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 5px;
  justify-content: center;
`;

const PokeList = ({ pokelist }) => {
  console.log(pokelist);
  return (
    <>
      <ListBox>
        {pokelist.map((pokemon, index) => {
          return <PokeCard key={index} pokemon={pokemon} />;
        })}
      </ListBox>
    </>
  );
};

export default PokeList;
