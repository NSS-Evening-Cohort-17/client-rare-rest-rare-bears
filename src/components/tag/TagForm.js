import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createTag } from './TagManager.js'

export const TagForm = () => {
    const history = useHistory()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [currentTag, setCurrentTag] = useState({
        label: ""
    })

    const changeTagState = (domEvent) => {
        const newTag = { ... currentTag }
        let selectedVal = domEvent.target.value

        if (domEvent.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newTag[domEvent.target.id] = selectedVal
        setCurrentTag(newTag)
    }

    return (
        <form>
            <h2>Create a New Tag</h2>
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
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const tag = {
                        label: currentTag.label,
                    }

                    // Send POST request to your API
                    createTag(tag)
                        .then(() => history.push("/tags"))
                }}
                className="btn btn-primary">Create Tag</button>

        </form>
    )
}