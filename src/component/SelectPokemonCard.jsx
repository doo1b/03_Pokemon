import React from "react";
import styled from "styled-components";
import { NameP, NumP } from "../GlobalStyle";
import { useNavigate } from "react-router-dom";

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
  font-weight: 500;
`;

const DelButton = styled.button`
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(45deg, #8c9dff, #ff8282);
  background-position: bottom left;
  background-size: 300%;
  color: white;
  transition: 0.2s ease-in;

  &:hover {
    background-image: linear-gradient(45deg, #8c9dff, #ff8282);
    background-position: top right;
    background-size: 400%;
  }
`;

const SelectPokemonCard = ({ pokemon, delPokemon }) => {
  const navigate = useNavigate();

  const handleDel = () => {
    delPokemon(pokemon.id);
  };

  return (
    <>
      <Card
        onClick={() => {
          navigate(`/detail?id=${pokemon.id}`);
        }}
      >
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
