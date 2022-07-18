import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { addComment } from "./CommentManager";

export const CommentForm = () => {

    const {postId, userId} = useParams();
    const history = useHistory();

    const [comment, setComment] = useState({
        post: postId,
        author: userId,
        createdOn: "",
        content: ""
    })

    const changeState = (e) => {
        const newComment = {...comment}
        let selectedVal = e.target.value
        newComment[e.target.name] = selectedVal
        setComment(newComment)
    }

    return (
        <>
        <form className="postForm">
        <h2>Add a comment</h2>
        <fieldset>
            <div className="postForm__group">
                <label htmlFor="content">Comment</label>
                <input type="textarea" name="content" id="postForm__textarea"className="postForm__input"
                    required autoFocus value={comment.content} onChange={changeState}
                />
            </div>
        </fieldset>

        <fieldset>
            <div className="postForm__group">
                <label htmlFor="createdOn">Date</label>
                <input type="text" name="createdOn"className="postForm__input" required 
                placeholder="YYYY-MM-DD" value={comment.createdOn} onChange={changeState}
                />
            </div>
        </fieldset>

        <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const newComment = {
                        id: comment.id,
                        author: parseInt(userId),
                        post: parseInt(postId),
                        content: comment.content,
                        created_on: comment.createdOn
                    }

                    addComment(newComment)
                    .then(() => history.push(`/posts/${postId}/comments`))
                }}
                className="formBtn"
                id="postForm__formBtn">
                    Submit
            </button>    
        </form>
        </>
    )
}