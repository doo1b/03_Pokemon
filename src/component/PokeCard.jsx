import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NameP, NumP } from "../GlobalStyle";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokeCards = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  height: 250px;
  border-radius: 10px;
  justify-content: space-evenly;
  font-weight: 500;
  border: ${(props) => (props.$isSelect ? "5px solid transparent" : "none")};
  background-image: linear-gradient(#ffe9e9, #ffe9e9),
    linear-gradient(180deg, #8c9dff 0%, #ff8282);
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 5px 10px rgb(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const AddButton = styled.button`
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(-45deg, #8c9dff, #ff8282);
  background-position: bottom left;
  background-size: 300%;
  color: white;
  transition: 0.2s ease-in;

  &:hover {
    background-image: linear-gradient(-45deg, #8c9dff, #ff8282);
    background-position: top right;
    background-size: 400%;
  }
`;

const PokeCard = ({ pokemon, isSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addPokemon(pokemon));
  };
  return (
    <PokeCards
      onClick={() => {
        navigate(`/detail?id=${pokemon.id}`);
      }}
      $isSelect={isSelect}
    >
      <img src={pokemon.img_url} />
      <NameP>{pokemon.korean_name}</NameP>
      <NumP>No.{pokemon.id.toString().padStart(3, "0")}</NumP>
      <AddButton
        onClick={(e) => {
          e.stopPropagation();
          handleAdd();
        }}
      >
        추가
      </AddButton>
    </PokeCards>
  );
};

export default PokeCard;
