import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const getTypeColor = (type) => {
  switch (type) {
    case "불꽃":
      return "#E62829";
    case "물":
      return "#2980EF";
    case "풀":
      return "#3FA129";
    case "전기":
      return "#FAC000";
    case "얼음":
      return "#3DCEF3";
    case "격투":
      return "#FF8000";
    case "독":
      return "#9141CB";
    case "땅":
      return "#915121";
    case "비행":
      return "#81B9EF";
    case "에스퍼":
      return "#EF4179";
    case "벌레":
      return "#91A119";
    case "바위":
      return "#AFA981";
    case "고스트":
      return "#704170";
    case "드래곤":
      return "#5060E1";
    case "악":
      return "#624D4E";
    case "강철":
      return "#60A1B8";
    case "페어리":
      return "#EF70EF";
    default:
      return "black"; // 기본 색상
  }
};

const DetailBall = styled.div`
  width: 900px;
  height: 800px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailImg = styled.img`
  width: 200px;
  height: auto;
  margin: 60px 0;
`;

const Num = styled.p`
  font-size: 17px;
  color: rgb(147, 147, 147);
`;

const Name = styled.p`
  font-size: 33px;
  margin-top: 10px;
  background: ${(props) =>
    props.type.length > 1
      ? `linear-gradient(45deg, ${getTypeColor(props.type[0])}, ${getTypeColor(
          props.type[1]
        )})`
      : getTypeColor(props.type[0])};
  background-clip: text;
  color: transparent;
`;

const Type = styled.span`
  color: ${(props) => getTypeColor(props.type)};
`;

const PBox = styled.div`
  text-align: center;
`;

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 50px;
`;

const BackButton = styled.button`
  margin-bottom: -100px;
  margin-top: 100px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  background-color: #ffe9e9;
`;

const Detail = () => {
  const navigate = useNavigate();
  const [pokemonId, setPokemonId] = useSearchParams();
  const pokemonList = MOCK_DATA;
  const id = pokemonId.get("id");
  const detailPokemon = pokemonList.find((pokemon) => {
    return pokemon.id === Number(id);
  });

  console.log(detailPokemon);
  return (
    <>
      <DetailBall>
        <PBox>
          <Num>No.{detailPokemon.id.toString().padStart(3, "0")}</Num>
          <Name type={detailPokemon.types}>{detailPokemon.korean_name}</Name>
        </PBox>
        <DetailImg src={detailPokemon.img_url} />
        <Description>{detailPokemon.description}</Description>
        <div>
          타입 :{" "}
          {detailPokemon.types.map((type, index) => (
            <Type key={`${type}-${index}`} type={type}>
              {detailPokemon.types.length - 1 === index ? type : type + ", "}
            </Type>
          ))}
        </div>
        <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
      </DetailBall>
    </>
  );
};

export default Detail;
