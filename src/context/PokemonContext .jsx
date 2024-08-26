import { createContext, useContext, useEffect, useState } from "react";

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
      ? alert("같은 포켓몬은 중복으로 등록할 수 없습니다.")
      : selectPokemon.length >= 6
      ? alert("최대 6개의 포켓몬만 등록할 수 있습니다")
      : setSelectPokemon((prev) => [...prev, pokemon]);
  };

  return (
    <PokemonContext.Provider value={{ selectPokemon, addPokemon, delPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
