import { call, put } from "redux-saga/effects";
import { setPosts } from "../reducer/posts";

// the handler connects the rootSaga with the actual request
// call the request function and store it in the store
// yield is like await
// handler function is doing everything
export function* handleNewGetPosts(action) {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
        const  data  = yield response.json();
        yield put(setPosts(data));
    } catch (error) {
        console.log(error);
    }
}