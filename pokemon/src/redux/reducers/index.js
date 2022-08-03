import pokeReducers from "./pokeReducers";

import { combineReducers } from "redux";

const allReducers = combineReducers({ pokeReducers });

export default allReducers;
