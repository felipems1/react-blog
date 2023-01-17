import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/new" element={<NewPost />} />
    </Routes>
  );
};

export default RoutesApp;
