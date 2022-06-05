// react import
import React, { useState } from 'react';

//libs import
import { uid } from 'uid';

//ui import
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/myButton';

//component function
function PostForm({create}) {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post, id: uid(4)
    }
    create(newPost)
    setPost({ title: "", body: "" });
  };

    return (
      <form>
        <MyInput
          placeholder="Post name"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <MyInput
          placeholder="Post body"
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
    );
}

export default PostForm;