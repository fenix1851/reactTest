import React, { useState } from "react";

import ListItem from "./ListItem";

function PostList({posts, title, remove}) {

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <ListItem remove={remove} number={index + 1} post={post} key={post.id}></ListItem>
      ))}
    </div>
  );
}

export default PostList;
