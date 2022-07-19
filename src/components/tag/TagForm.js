import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { createTag, getTagById, updateTag } from './TagManager.js';

export const TagForm = () => {
    const history = useHistory()
    const { tagId } = useParams()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [currentTag, setCurrentTag] = useState({
        label: ""
    })

    useEffect(() => {
        if (tagId) {
            getTagById(parseInt(tagId))
              .then(updatedTag => {
                setCurrentTag({
                  label: updatedTag.label
                })
            })
        }
    }, [])

    const changeTagState = (domEvent) => {
        const newTag = { ... currentTag }
        let selectedVal = domEvent.target.value

        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newTag[domEvent.target.id] = selectedVal
        setCurrentTag(newTag)
    }

    const handleClickSaveTag = (domEvent) => {
        domEvent.preventDefault()

        if (currentTag.label === "") {
            window.alert("Please enter a tag")
        } else if (tagId) {
            updateTag(tagId, currentTag)
                .then(() => history.push("/tags"))
        } else {
            createTag(tag)
                .then(() => { history.push("/tags") })
        }
    } 

    return (
        <form className="categoryForm">
            <h2 className="tagForm__label">{tagId ? "Edit Tag" : "Create New Tag"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Tag: </label>
                    <input type="text" id="label" required autoFocus
                            className="form-control"
                            placeholder="Enter Tag Label" 
                            value={currentTag.label}
                            onChange={changeTagState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={handleClickSaveTag}>{tagId ? "Submit Change": "Create Tag"}
                </button>

        </form>
    )
}