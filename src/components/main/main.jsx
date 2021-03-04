import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../post/post";

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
          ? posts.map(({ title, author, id, date }) => (
              <Post
                title={title}
                key={id}
                author={author}
                date={date}
                id={id}
              />
            ))
          : <p className='main__text'>Нажмите "Добавить запись" чтобы создавать новые записи</p>}
      </ul>
    </section>
  );
};

export default Main;
