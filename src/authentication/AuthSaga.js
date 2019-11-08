import { put, takeLatest } from "redux-saga/effects";
import { Auth } from "aws-amplify";

function* authWorker(action) {
  try {
    const userDetails = yield Auth.currentUserInfo();
    console.log("Saga has the user.");
    console.log(userDetails);
    if (userDetails) {
      yield put({
        type: "userDetails/received",
        userDetails
      });
    }
  } catch (e) {
    yield put({
      type: "errors",
      title: "Error signing in",
      errors: e.errors
    });
  }
}

export function* authWatcher() {
  yield takeLatest("auth/signin", authWorker);
}
