import React from "react";
import { Link } from "react-router-dom";

export const PostCard = ({post}) => {
    return <>
        <div className="post__card">
            <div className="post__title">{post.title}</div>
            <div className="post__content">{post.content}</div>
            <div className="post__author">posted by {post.user.username}</div>
            {/* <button className="btn btn-2 btn-sep icon-create"
                onClick={() => 
                    deletePost(post.id)
                    .then(() => getPosts()
                    .then((data) => setPosts(data)))}
            >Delete</button> */}
        </div>
    </>
}