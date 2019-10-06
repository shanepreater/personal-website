import {takeLatest} from 'redux-saga/effects'

function* authWorker(action) {
    yield console.log("Login attempted")
}

export function* authWatcher() {
    yield takeLatest("AUTH/LOGIN/request", authWorker)
}