import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { getTags, removeTag } from "./TagManager.js"


export const TagList = (props) => {
    const [ tags, setTags ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTags().then(data => setTags(data))
    }, [])

    const deleteTag = id => {
        removeTag(id)
        .then(() => getTags().then(setTags));
    };

    return (
        <>

        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push({ pathname: "/tags/new" })
            }}
        >Create New Tag</button>


        <article className="tags">
            {
                tags.map(tag => {
                    return <section key={`tag--$tag.id`} className="tag">
                        <div className="tag__label">{tag.label}</div>
                        <button className="btn btn-2 btn-sep icon-edit"
                            onClick={() => {
                                history.push(`/tags/${tag.id}/edit`)
                            }}
                        >Edit Tag</button>
                        <button className="btn btn-2 btn-sep icon-delete"
                            onClick={deleteTag =(deleteTag) => {
                                history.push(`/tags`)
                            }}
                        >Delete Tag</button>
                    </section>
                })
            }
        </article>
        
        </>  
    )
}

