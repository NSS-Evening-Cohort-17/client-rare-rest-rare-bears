import React, { useEffect, useState } from "react"
import { getTags } from "./TagManager.js"


export const TagList = (props) => {
    const [ tags, setTags ] = useState([])

    useEffect(() => {
        getTags().then(data => setTags(data))
    }, [])

    return (
        <article className="tags">
            {
                tags.map(tag => {
                    return <section key={`game--$tag.id`} className="tag">
                        <div className="tag__label">{tag.label}</div>
                    </section>
                })
            }
        </article>
    )
}

