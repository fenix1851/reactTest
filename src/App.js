import {React, useState} from "react";

function App() {
  const [likes, setLikes] = useState(1)
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setLikes(likes - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
