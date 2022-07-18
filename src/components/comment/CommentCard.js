import React from "react";

export const CommentCard = ({ comment, delComment }) => {

    const userId = parseInt(localStorage.getItem("userId"))

    if (userId === comment.author.id) 
        return ( 
            <section className="comment">
            <p>{comment.content}</p>
            <p className="comment__details">Posted by {comment.author.user.username} on {comment.created_on}
            <button className="comment__delete" onClick={() => {delComment(comment.id)}}>
            Delete</button>
            </p>
            </section>
        )
    else
        return ( 
        <section className="comment">
            <p>{comment.content}</p>
            <p className="comment__details">Posted by {comment.author.user.username} on {comment.created_on}</p>
        </section>
    )
        

 
}