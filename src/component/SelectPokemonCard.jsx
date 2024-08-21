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
  font-family: "DungGeunMo";
  font-weight: 500;
`;

const NameP = styled.p`
  font-size: 17px;
`;

const NumP = styled.p`
  font-size: 14px;
  color: rgb(147, 147, 147);
`;

const DelButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(45deg, #8c9dff, #ff8282);
  background-position: bottom left;
  background-size: 300%;
  color: white;
  font-weight: 900;
  transition: 0.2s ease-in;

  &:hover {
    background-image: linear-gradient(45deg, #8c9dff, #ff8282);
    background-position: top right;
    background-size: 400%;
  }
`;

const SelectPokemonCard = ({ pokemon, delPokemon }) => {
  const handleDel = () => {
    delPokemon(pokemon.id);
  };

  return (
    <>
      <Card>
        <img src={pokemon.img_url} />
        <NameP>{pokemon.korean_name}</NameP>
        <NumP>No.{pokemon.id.toString().padStart(3, "0")}</NumP>
        <DelButton
          onClick={(e) => {
            e.stopPropagation();
            handleDel();
          }}
        >
          삭제
        </DelButton>
      </Card>
    </>
  );
};

export default SelectPokemonCard;
