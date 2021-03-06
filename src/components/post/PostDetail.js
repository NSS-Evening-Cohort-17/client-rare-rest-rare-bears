import React, { useEffect, useState } from "react"
import { useHistory, useParams, Link } from 'react-router-dom'
import { getCommentsByPost } from "../comment/CommentManager";
import { CommentCard } from "../comment/CommentCard";
import { getPostById } from "./PostManager";

export const PostDetail = () => {
    const params = useParams();
    const history = useHistory();
    const [postId, setPostId] = useState(parseInt(params.postId));
    const [post, setPost] = useState({})
    const [postComments, setPostComments] = useState([]);
    
    useEffect(() => {
        getPostById(postId).then(data => setPost(data))
        getCommentsByPost(postId).then(data => setPostComments(data))
    }, [])

    return <>
        <div className="post__card">
            <div className="post__title">{post.title}</div>
            <div className="image__wrapper">
                <img className="post__image" src={post.image_url} />
            </div>
            <div className="post__content">{post.content}</div>
            <div className="post__author">posted by {post.user?.user.username}</div>
            <div className="post__date">{post.publication_date}</div>
            {/* <button className="btn btn-2 btn-sep icon-create"
                onClick={() => 
                    deletePost(post.id)
                    .then(() => getPosts()
                    .then((data) => setPosts(data)))}
            >Delete</button> */}
        </div>
        <div className="post__comments">
            {postComments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        </div>
    </>
}