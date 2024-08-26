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
    selectPokemon.some((p) => p.id === pokemon.id)
      ? Swal.fire({
          text: "같은 포켓몬은 중복으로 등록할 수 없습니다!",
          icon: "warning",
        })
      : selectPokemon.length >= 6
      ? Swal.fire({
          text: "더 이상 포켓몬을 등록할 수 없습니다!",
          icon: "error",
        })
      : setSelectPokemon((prev) => [...prev, pokemon]);
  };

  return (
    <PokemonContext.Provider value={{ selectPokemon, addPokemon, delPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
