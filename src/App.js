import { useState } from "react";
import "./App.css";

function App() {
  let logoName = "myBlog";
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "우동 맛집",
    "리액트!!",
  ]);
  const [like, setLike] = useState(0);

  function likeHandler() {
    setLike(like + 1);
  }
  return (
    <div className="App">
      <div className="blackNav">
        <h4> {logoName}</h4>
      </div>
      <div className="articleList">
        <h4>
          {title[0]}
          <span onClick={likeHandler}> 👍 </span> <span>{like}</span>{" "}
        </h4>
        <p>6월 20일 발행</p>
      </div>
      <div className="articleList">
        <h4>{title[1]}</h4>
        <p>6월 23일 발행</p>
      </div>
      <div className="articleList">
        <h4>{title[2]}</h4>
        <p>6월 20일 발행</p>
      </div>
    </div>
  );
}

export default App;
