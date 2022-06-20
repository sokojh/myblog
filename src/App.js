import { useState } from "react";
import "./App.css";

function App() {
  let logoName = "myBlog";
  const [title, setTitle] = useState("남자 코트 추천");

  return (
    <div className="App">
      <div className="blackNav">
        <h4> {logoName}</h4>
      </div>
      <div className="articleList">
        <h4>{title}</h4>
        <p>6월 20일 발행</p>
      </div>
    </div>
  );
}

export default App;
