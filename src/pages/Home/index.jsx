import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../axios";
import "./style.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await api
      .get("/posts")
      .then((response) => setPosts(response.data.slice(0, 5)))
      .catch((error) => console.log(error));
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container-loading">
        <h1>Carregando...</h1>
      </div>
    );
  } else {
    return (
      <div className="container-posts">
        <h1>Ultimos posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="info">
              Ler mais
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default Home;
