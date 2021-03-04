import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { title, author, date, id } = props;

  return (
    <li className='post'>
      <Link to={`/post/${id}`} className='post__link'>
        <div className="post__info">
          <h2 className="post__title">{title}</h2>
          <p className="post__text">Автор: {author}</p>
          <p className="post__text">Дата создания: {date}</p>
        </div>
      </Link>
    </li>
  );
};

export default Post;
