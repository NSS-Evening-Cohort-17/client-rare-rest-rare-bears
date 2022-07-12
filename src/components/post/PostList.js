import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getPosts, deletePost } from "./postManager.js"

export const PostList = (props) => {
    const history = useHistory();
    const [ Posts, setPosts ] = useState([])

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return (
        <>
        <header>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/posts/new" })
                }}
            >New Post</button>
        </header>
        <article className="posts">
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <div className="post__title">{post.title}</div>
                        <div className="post__content">{post.content}</div>
                        <div className="post__author">posted by {post.user.username}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => 
                                deletePost(post.id)
                                .then(() => getPosts()
                                .then((data) => setPosts(data)))}
                        >Delete</button>
                    </section>
                })
            }
        </article>
        </>
    )
}