import React, { useState, useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "../add-post/add-post";
import Main from "../main/main";
import ViewPost from "../view-post/view-post";
import "./app.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [date, setDate] = useState("");

  const createPost = ({ title, author }) => {
    const post = { title, author, dateOfCreate: date, id: posts.length + 1 };
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const storage = useCallback(() => {
    const storage = JSON.parse(localStorage.getItem("posts"));
    if (storage) {
      setPosts(storage);
    }
  }, []);

  useEffect(() => {
    storage();
  }, [storage]);

  useEffect(() => {
    const date = new Date().toISOString().substring(0, 10);
    setDate(date);
  }, []);

  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
          <Main posts={posts} />
        </Route>
        <Route path="/add-post">
          <AddPost onCreate={createPost} />
        </Route>
        <Route path="/post/:id">
          <ViewPost />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
