import {
  GET_DATA_SUCCESS,
  GET_POKEMON_SUCCESS,
  CHANGE,
  GET_REQUEST_FAILURE,
} from "../actions/types";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const initialState = {
  url: URL,
  pokemon: {},
  data: {},
  error: "",
};

const pokeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data };

    case GET_REQUEST_FAILURE:
      return { ...state, error: action.err };

    case CHANGE:
      return {
        ...state,
        url: action.payload.url,
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.pokemon,
      };

    default:
      return state;
  }
};

export default pokeReducers;
