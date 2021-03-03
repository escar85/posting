import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../post/post";
import "./main.css";

const Main = (props) => {
  const { posts } = props;

  useEffect(() => {
    document.title = "Главная";
  }, []);

  return (
    <section className="main">
      <Link to="/add-post" className="main__add-post">
        Добавить запись
      </Link>
      <ul className="main__post-list">
        {posts.length > 0
          ? posts.map(({ title, author, id, dateOfCreate }) => (
              <Post
                title={title}
                key={id}
                author={author}
                date={dateOfCreate}
                id={id}
              />
            ))
          : ""}
      </ul>
    </section>
  );
};

export default Main;
