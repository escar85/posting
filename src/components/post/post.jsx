import React from "react";
import { Link } from 'react-router-dom'
import './post.css'

const Post = (props) => {
  const { title, author, date, id } = props;
  //   function handleDeleteClick() {
  //     props.onUserDelete(props.user);
  //   }

  return (
    <Link to={`/post/${id}`} className="post">
      <div className="pots__info">
        <h2 className="pots__title">{title}</h2>
        <p className="pots__text">Автор: {author}</p>
        <p className="pots__text">Дата создания: {date}</p>
      </div>
    </Link>
  );
};

export default Post;

//       <button type="button" aria-label="delete" className='pots__delete-button' onClick={handleDeleteClick}></button>
