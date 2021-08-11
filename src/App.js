import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { getUser } from "./redux/reducer/user";
import "./index.css";
import {getPosts} from "./redux/reducer/posts";

export default function App() {
  const dispatch = useDispatch();
  // dispatch an action and not doing an api call any more
  // as long as the app is rendered
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  // user object from the store
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const count = useSelector((state) => state.counter.count);
  console.log(count);

  const posts = useSelector((state) => state.posts.posts)

  console.log(posts)

  const voters = [
    "Person 1 ",
    "Person 2",
    "Person 3"
  ];
  return (
      <div className="App">
        {user && <h1> Hello, {user.name} </h1>}
        <h1>Redux made easy</h1>
        <h2> Total Votes: {count}</h2>
        {voters.map((voter) => (
            <Counter name={voter} />
        ))}
        <button onClick={() => dispatch(getPosts())}>Get News</button>
      </div>
  );
}
