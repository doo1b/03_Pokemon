import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  selectPokemon: localStorage.getItem("selectPokemon")
    ? JSON.parse(localStorage.getItem("selectPokemon"))
    : [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.selectPokemon.some((p) => p.id === pokemon.id)) {
        Swal.fire({
          text: "같은 포켓몬은 중복으로 등록할 수 없습니다!",
          icon: "warning",
        });
      } else if (state.selectPokemon.length >= 6) {
        Swal.fire({
          text: "더 이상 포켓몬을 등록할 수 없습니다!",
          icon: "error",
        });
      } else if (pokemon.fromDetail) {
        state.selectPokemon.push(pokemon);
        localStorage.setItem(
          "selectPokemon",
          JSON.stringify(state.selectPokemon)
        );
        Swal.fire({
          text: "포켓몬이 성공적으로 추가되었습니다!",
          icon: "success",
        });
      } else {
        state.selectPokemon.push(pokemon);
        localStorage.setItem(
          "selectPokemon",
          JSON.stringify(state.selectPokemon)
        );
      }
    },

    delPokemon: (state, action) => {
      state.selectPokemon = state.selectPokemon.filter(
        (p) => p.id !== action.payload
      );
      localStorage.setItem(
        "selectPokemon",
        JSON.stringify(state.selectPokemon)
      );
    },
  },
});

export const { addPokemon, delPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
