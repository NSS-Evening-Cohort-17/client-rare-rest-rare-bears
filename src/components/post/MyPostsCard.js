import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deletePost, getPosts } from "./PostManager";
import "./Post.css"

export const MyPostsCard = ({post}) => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    return <>
        <div className="post__card">
            <Link to={`/posts/${post.id}`} className="post__title">
                {post.title}
            </Link>
            <div className="image__wrapper">
                <img className="post__image" src={post.image_url} />
            </div>
            <div className="post__content">{post.content}</div>
            <div className="post__author">posted by {post.user.user.username}</div>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => 
                    deletePost(post.id)
                    .then(() => getPosts()
                    .then((data) => setPosts(data)))
                    .then(window.location.reload())}
            >Delete</button>
        </div>
    </>
}