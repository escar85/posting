import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./add-post.css";
import Input from "../input/input";
import { useFormWithValidation } from "../../utils/Validation";

const AddPost = (props) => {
  const { onCreatePost } = props;
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().substring(0, 10);
    onCreatePost({
      title: values.title,
      author: values.author,
      date, 
      id: new Date().toISOString(),
    });
    resetForm();
    history.push("/");
  };

  useEffect(() => {
    document.title = "Добавить запись";
  }, []);

  return (
    <section className="add-post">
      <form className="add-post__form" onSubmit={handleSubmit} noValidate>
        <h3>Введите данные для новой записи</h3>
        <Input
          name="title"
          minLength="6"
          maxLength="30"
          placeholder="Введите заголовок записи"
          label="Заголовок"
          onChange={handleChange}
          errorText={errors.title}
          isValid={isValid}
        />
        <Input
          name="author"
          minLength="6"
          maxLength="30"
          placeholder="Введите имя автора"
          label="Автор"
          onChange={handleChange}
          errorText={errors.author}
          isValid={isValid}
        />

        <button type="submit" disabled={!isValid}>Создать</button>
      </form>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
};

export default AddPost;
