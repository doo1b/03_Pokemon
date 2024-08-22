import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokeImg = styled.img`
  width: 40%;
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const DexButton = styled.button`
  margin: 10px;
  padding: 20px 30px;
  border: none;
  border-radius: 20px;
  background-color: #537ed5;
  color: white;
  font-size: 1vw;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <HomeBox>
      <PokeImg src='https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png' />
      <DexButton
        onClick={() => {
          navigate("dex");
        }}
      >
        포켓몬 도감 시작하기
      </DexButton>
    </HomeBox>
  );
}

export default Home;
