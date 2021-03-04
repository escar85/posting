import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "./input/input";
import { useFormWithValidation } from "../../utils/Validation";
import Wysiwyg from "./wysiwyg/wysiwyg";

const AddPost = (props) => {
  const [wysiwygValue, setWysiwygValue] = React.useState("");
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
      wysiwygValue,
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
        <h3 className="add-post__title">Введите данные для новой записи</h3>
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

        <Wysiwyg setWysiwygValue={setWysiwygValue} />

        <button
          className="add-post__submit-button"
          type="submit"
          disabled={!isValid}
        >
          Создать
        </button>
      </form>
      <Link className="add-post__link" to="/">
        Вернуться на главную
      </Link>
    </section>
  );
};

export default AddPost;
