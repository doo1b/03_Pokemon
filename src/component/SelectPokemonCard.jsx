import React from "react";
import styled from "styled-components";

const Card = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  height: 250px;
  background-color: #ffe9e9;
  border-radius: 10px;
  justify-content: space-evenly;
`;

const NameP = styled.p`
  font-weight: 900;
`;

const NumP = styled.p`
  font-size: 14px;
  color: rgb(147, 147, 147);
`;

const SelectPokemonCard = ({ pokemon }) => {
  return (
    <>
      <Card>
        <img src={pokemon.img_url} />
        <NameP>{pokemon.korean_name}</NameP>
        <NumP>No.{pokemon.id.toString().padStart(3, "0")}</NumP>
      </Card>
    </>
  );
};

export default SelectPokemonCard;
