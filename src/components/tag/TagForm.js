import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createTag } from './GameManger.js'

export const TagForm = () => {
    const history = useHistory()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */

    const [currentGame, setCurrentGame] = useState({
        label: ""
    })
}