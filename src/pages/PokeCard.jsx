import React from "react";
import styled from "styled-components";

const PokeCards = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 250px;
  background-color: rgb(255, 241, 208);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  box-shadow: 0 0px 10px rgb(0, 0, 0, 0.2);
  transition: 0.2s;
  &:hover {
    box-shadow: 0 5px 10px rgb(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const NumP = styled.p``;

const PokeCard = ({ pokemon, index }) => {
  return (
    <PokeCards id={index}>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      <p>No.{pokemon.id.toString().padStart(3, "0")}</p>
    </PokeCards>
  );
};

export default PokeCard;
