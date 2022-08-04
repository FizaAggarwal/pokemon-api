import { put, takeEvery } from "redux-saga/effects";
import {
  GET_POKEMON_SUCCESS,
  GET_POKEMON,
  GET_REQUEST_FAILURE,
} from "../actions/types";

function* getPokemon(action) {
  try {
    let pokemon = yield fetch(
      `https://pokeapi.co/api/v2/pokemon/${action.payload.name}`
    );
    pokemon = yield pokemon.json();
    console.log(pokemon);
    yield put({ type: GET_POKEMON_SUCCESS, pokemon });
  } catch (err) {
    yield put({ type: GET_REQUEST_FAILURE, err });
  }
}

function* pokeSaga() {
  yield takeEvery(GET_POKEMON, getPokemon);
}

export default pokeSaga;
