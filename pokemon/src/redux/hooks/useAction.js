import { useDispatch } from "react-redux";
import { GET_POKEDATA, GET_POKEMON, CHANGE } from "../actions/types";

export const useAction = () => {
  const dispatch = useDispatch();

  const requestData = (url) => {
    return dispatch({
      type: GET_POKEDATA,
      payload: {
        url: url,
      },
    });
  };

  const change = (url) => {
    return dispatch({
      type: CHANGE,
      payload: {
        url: url,
      },
    });
  };

  const pokedata = (name) => {
    return dispatch({
      type: GET_POKEMON,
      payload: {
        name: name,
      },
    });
  };

  return { requestData, change, pokedata };
};
