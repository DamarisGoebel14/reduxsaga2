import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducer/counter";
import userReducer from "./reducer/user";
import postsReducer from "./reducer/posts"
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    posts: postsReducer
});

// initial setup for saga
const sagaMiddleware = createSagaMiddleware();

// all your middleware goes in there, atm there is only the sagaMiddleware
const middleware = [sagaMiddleware];

//create redux store and add middleware redux saga
const store = createStore(reducer, {}, applyMiddleware(...middleware));

// watcherSaga listens to any redux action
sagaMiddleware.run(watcherSaga);

export default store;
