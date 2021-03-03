import React, { useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "../add-post/add-post";
import Main from "../main/main";
import ViewPost from "../view-post/view-post";
import { connector } from "./container";
import "./app.css";

const App = (props) => {
  const { posts, setPosts, onCreatePost } = props;

  const storage = useCallback(() => {
    const storage = JSON.parse(localStorage.getItem("posts"));
    if (storage) {
      setPosts(storage);
    }
  }, [setPosts]);

  useEffect(() => {
    storage();
  }, [storage]);

  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
          <Main posts={posts} />
        </Route>
        <Route path="/add-post">
          <AddPost onCreatePost={onCreatePost} />
        </Route>
        <Route path="/post/:id">
          <ViewPost />
        </Route>
      </Switch>
    </div>
  );
};

export default connector(App);
