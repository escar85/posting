import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewPost = () => {
  const posts = JSON.parse(localStorage.getItem("posts"));
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id.toString());

  useEffect(() => {
    document.title = post.title;
  }, [post]);

  return (
    <div className="view-post">
      <h1 className="view-post__title">{post.title}</h1>
      <iframe
        className="view-post__iframe"
        title="This is a unique title"
        sandbox="allow-same-origin"
        srcDoc={post.wysiwygValue}
      />
      <p className="view-post__text">Автор: {post.author}</p>
      <p className="view-post__text">Дата создания: {post.date}</p>
      <Link className="view-post__link" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ViewPost;
