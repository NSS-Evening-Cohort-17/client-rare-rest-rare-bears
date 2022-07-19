import React, { useEffect, useState } from "react"
import { useHistory, useParams, Link } from 'react-router-dom'
import { getCommentsByPost } from "../comment/CommentManager";
import { CommentCard } from "../comment/CommentCard";
import { CommentForm } from "./CommentForm";
import { getPostById } from "../post/PostManager";

export const CommentList = () => {
    const params = useParams();
    const [postId, setPostId] = useState(parseInt(params.postId));
    const [post, setPost] = useState({})
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        getPostById(postId).then(data => setPost(data))
        getCommentsByPost(postId).then(data => setPostComments(data))
    }, [])

    

    return <>
        <div className="post__comments">
            {postComments.map(comment => <CommentCard key={comment.id} comment={comment} delComment={delComment}/>)}
        </div>
    </>
}