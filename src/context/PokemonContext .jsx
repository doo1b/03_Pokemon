import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selectPokemon, setSelectPokemon] = useState(() => {
    const savePokemon = localStorage.getItem("selectPokemon");
    return savePokemon ? JSON.parse(savePokemon) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectPokemon", JSON.stringify(selectPokemon));
  }, [selectPokemon]);

  const delPokemon = (id) => {
    setSelectPokemon((pokemon) => pokemon.filter((p) => p.id !== id));
  };

  const addPokemon = (pokemon) => {
    return selectPokemon.some((p) => p.id === pokemon.id)
      ? (Swal.fire({
          text: "같은 포켓몬은 중복으로 등록할 수 없습니다!",
          icon: "warning",
        }),
        false) // 중복된 경우 false 반환
      : selectPokemon.length >= 6
      ? (Swal.fire({
          text: "더 이상 포켓몬을 등록할 수 없습니다!",
          icon: "error",
        }),
        false) // 포켓몬이 6마리 이상인 경우 false 반환
      : (setSelectPokemon((prev) => [...prev, pokemon]), true); // 성공적으로 추가된 경우 true 반환
  };

  return (
    <PokemonContext.Provider value={{ selectPokemon, addPokemon, delPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
