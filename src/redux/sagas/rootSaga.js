import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../reducer/user";
import {GET_POSTS} from "../reducer/posts";
import {handleNewGetPosts} from "./newPosts";
import {handleNewGetUser} from "./newUser";

// watcherSaga is in the rootSaga
// takeLatest means it only takes the latest request,
// if the first request is not done yet, the second is called it will simply canceled the
// first one and cancel the first one
// with thee * it is a generated function
// we look for any actions which has been dispatched and match it to the request function which handles the api request
// connect the handler function to the user action

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleNewGetUser);
    yield takeLatest(GET_POSTS, handleNewGetPosts);
}