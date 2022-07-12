import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { PostCard } from "./PostCard.js";
import { getPosts } from "./PostManager.js"

export const PostList = (props) => {
    const history = useHistory();
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return <>
        <header>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/posts/new" })
                }}
            >New Post</button>
        </header>
        <section className="post__list">
            {posts.map(post => <PostCard key={post.id} post={post}/>)}
        </section>
    </>
}