import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Post from "../post/post";
import "./main.css";

const Main = (props) => {
  const { posts } = props;

  useEffect(() => {
    document.title = 'Главная';
  }, []);

  return (
    <HelmetProvider>
      <section className="main">
        <Helmet title="Главная" />
        <Link to="/add-post">Добавить запись</Link>
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
      </section>
    </HelmetProvider>
  );
};

export default Main;
