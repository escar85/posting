import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewPost = () => {
  const posts = JSON.parse(localStorage.getItem("posts"))
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id.toString());

  useEffect(() => {
    document.title = post.title;
  }, [post]);

  console.log(posts)
  console.log(id)
  console.log(post)

  return (
    <>
      <h1 className="pots__title">{post.title}</h1>
      <p className="pots__text">Автор: {post.author}</p>
      <p className="pots__text">Дата создания: {post.dateOfCreate}</p>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
};

export default ViewPost;
