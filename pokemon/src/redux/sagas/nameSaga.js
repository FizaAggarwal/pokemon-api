import { put, takeEvery } from "redux-saga/effects";
import {
  GET_DATA_SUCCESS,
  GET_POKEDATA,
  GET_REQUEST_FAILURE,
} from "../actions/types";

function* getData(action) {
  try {
    let data = yield fetch(action.payload.url);
    data = yield data.json();
    yield put({ type: GET_DATA_SUCCESS, data });
  } catch (err) {
    yield put({ type: GET_REQUEST_FAILURE, err });
  }
}

function* nameSaga() {
  yield takeEvery(GET_POKEDATA, getData);
}

export default nameSaga;
