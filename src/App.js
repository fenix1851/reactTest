import {React, useState} from "react";

import "../src/styles/app.css";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {

  const [posts, setPosts] = useState([
    { id: "1", title: "React is cool", body: "I love react" },
    { id: "2", title: "React is cool", body: "I love react" },
    { id: "3", title: "React is cool", body: "I love react" },
  ]);
  
  const createPost =(newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(p=>p.id !== postToRemove.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !==0
        ?  <PostList remove={removePost} posts={posts} title="Post List 1"></PostList>
        : <div style={{color: 'gray', fontSize: 22, textAlign: 'center', marginTop:150}}>Posts not founded, please create one</div>
      }
    </div>
  );
}

export default App;
