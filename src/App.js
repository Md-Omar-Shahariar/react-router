import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoyFound from "./components/NotFound/NoyFound";
import Post from "./components/Post/Post";
import PostDetail from "./components/POstDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="friend/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/posts" element={<Post></Post>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NoyFound></NoyFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
