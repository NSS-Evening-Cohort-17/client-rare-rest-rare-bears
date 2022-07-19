import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { PostCard } from "./PostCard.js";
import { getPosts } from "./PostManager.js"
import { MyPostsCard } from "./MyPostsCard.js"

export const MyPosts = () => {
    const history = useHistory();
    const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("userId"));
    const [posts, setPosts] = useState([]);

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
            {posts.filter(post => post.user == currentUserId).map(post => <MyPostsCard key={post.id} post={post}/>)}
        </section>
    </>
}