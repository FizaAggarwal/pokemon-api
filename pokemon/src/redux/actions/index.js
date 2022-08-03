import { GET_POKEDATA, GET_POKEMON, CHANGE } from "./types";

export const requestData = (url) => {
  return {
    type: GET_POKEDATA,
    payload: {
      url: url,
    },
  };
};

export const change = (url) => {
  return {
    type: CHANGE,
    payload: {
      url: url,
    },
  };
};

export const pokedata = (name) => {
  return {
    type: GET_POKEMON,
    payload: {
      name: name,
    },
  };
};
