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
      state.selectPokemon.some((p) => p.id === pokemon.id)
        ? Swal.fire({
            text: "같은 포켓몬은 중복으로 등록할 수 없습니다!",
            icon: "warning",
          })
        : state.selectPokemon.length >= 6
        ? Swal.fire({
            text: "더 이상 포켓몬을 등록할 수 없습니다!",
            icon: "error",
          })
        : pokemon.fromDetail
        ? ((state.selectPokemon.push(pokemon),
          localStorage.setItem(
            "selectPokemon",
            JSON.stringify(state.selectPokemon)
          )),
          Swal.fire({
            text: "포켓몬이 성공적으로 추가되었습니다!",
            icon: "success",
          }),
          console.log("됐나?"))
        : (state.selectPokemon.push(pokemon),
          localStorage.setItem(
            "selectPokemon",
            JSON.stringify(state.selectPokemon)
          ),
          console.log(pokemon.fromDetail));
      //   if () {
      //     return "duplicate";
      //   } else if (state.selectPokemon.length >= 6) {
      //     return "excess";
      //   } else {
      //     state.selectPokemon.push(pokemon);
      //     localStorage.setItem(
      //       "selectPokemon",
      //       JSON.stringify(state.selectPokemon)
      //     );
      //     return "success";
      //   }
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
