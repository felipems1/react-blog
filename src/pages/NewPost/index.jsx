import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../axios";
import "./style.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await api
      .post("/posts", { body: post })
      .then(() => {
        navigate("/");
        alert("Post criado com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-add">
      <form>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Conteúdo:</label>
        <textarea
          name="body"
          id="body"
          placeholder="Digite o conteúdo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="btn-add" onClick={handleAdd}>
          Criar Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
