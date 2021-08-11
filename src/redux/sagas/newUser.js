import { call, put } from "redux-saga/effects";
import { setUser } from "../reducer/user";

// the handler connects the rootSaga with the actual request
// call the request function and store it in the store
// yield is like await
// handler function is doing everything
export function* handleNewGetUser(action) {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users?id=1');
        const  data  = yield response.json();
        yield put(setUser(...data));
    } catch (error) {
        console.log(error);
    }
}