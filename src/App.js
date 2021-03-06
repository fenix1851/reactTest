import {React, useState, useMemo} from "react";

import "../src/styles/app.css";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";


function App() {

  const [posts, setPosts] = useState([
    { id: "1", title: "React is cool", body: "I love react" },
    { id: "2", title: "React is cool", body: "I love react" },
    { id: "3", title: "React is cool", body: "I love react" },
  ]);
  
  const [selectedSort, setSelectedSort] = useState('');

  const createPost =(newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (postToRemove) => {
    setPosts(posts.filter(p=>p.id !== postToRemove.id))
  }

  const sortPosts = sort=>{
    setSelectedSort(sort)

  }

  const checkSortRequire = ()=>{
    console.log('1')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts;
    }
  }

  const sortedPosts = useMemo(() => checkSortRequire(), [selectedSort, posts]);

  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <MyInput value={search} onChange={event=>setSearch(event.target.value)} placeholder='Search...'></MyInput>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by:"
          options={[
            { value: "title", name: "Title" },
            { value: "body", name: "Body" }
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Post List 1"
        ></PostList>
      ) : (
        <div
          style={{
            color: "gray",
            fontSize: 22,
            textAlign: "center",
            marginTop: 150,
          }}
        >
          Posts not founded, please create one
        </div>
      )}
    </div>
  );
}

export default App;
