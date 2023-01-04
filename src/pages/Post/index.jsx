import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../axios";
import "./style.css";

const Post = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([api.get(`/posts/${id}`), api.get(`/posts/${id}/comments`)])
      .then(([postReponse, comentsResponse]) => {
        setPost(postReponse.data);
        setComments(comentsResponse.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deletePost = async () => {
    await api
      .delete(`posts/${id}`)
      .then(() => {
        navigate("/");
        alert("Post excluido com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return (
      <div className="container-loading">
        <h1>Carregando...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container-post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className="container-delete">
          <button onClick={deletePost}>Excluir</button>
        </div>
        <div>
          {comments.map((item) => (
            <div className="container-comments" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.body}</p>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Post;
