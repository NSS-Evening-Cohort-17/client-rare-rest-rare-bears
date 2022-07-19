import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { getTags } from "./TagManager.js"


export const TagList = (props) => {
    const [ tags, setTags ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTags().then(data => setTags(data))
    }, [])

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
                    </section>
                })
            }
        </article>
        
        </>  
    )
}

