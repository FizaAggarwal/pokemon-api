import nameSaga from "./nameSaga";
import pokeSaga from "./pokeSaga";
import { fork } from "redux-saga/effects";

function* mySaga() {
  yield fork(nameSaga); // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
  yield fork(pokeSaga);
}

export default mySaga;
