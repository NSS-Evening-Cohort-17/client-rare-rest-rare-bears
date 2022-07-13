import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createPost, getPosts } from './PostManager.js'

export const PostForm = () => {
    const history = useHistory()
    // const [categories, setCategories] = useState([]);
    const [currentPost, setCurrentPost] = useState({
        // category: 1,
        title: "",
        image_url: "",
        content: ""
    })

    // useEffect(() => {
    //     getCategories().then((data) => setCategories(data))
    // }, []);

    const changePostState = (domEvent) => {
        let newPost = {...currentPost}
        let newValue = domEvent.target.value
        newPost[domEvent.target.name] = newValue
        setCurrentPost(newPost)
    }

    return <>
        <form className="post__form">
            <h2>Create a New Post</h2>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" required autoFocus className="form-control"
                        value={currentPost.category}
                        onChange={changePostState}>
                        <option value="0">Select Category</option>
                        {
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentPost.title}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image_url">Image URL: </label>
                    <input type="text" name="image_url" required autoFocus className="form-control"
                        value={currentPost.image_url}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content: </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentPost.content}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    let yourDate = new Date()
                    const post = {
                        // category: currentPost.category,
                        category: 1,
                        title: currentPost.title,
                        image_url: currentPost.image_url,
                        content: currentPost.content, 
                        publication_date: yourDate.toISOString().split('T')[0],
                        approved: 1
                    }

                    createPost(post)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Submit</button>
        </form>
    </>
}