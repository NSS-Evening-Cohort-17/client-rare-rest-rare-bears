import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCategory } from "./CategoryManager";

export const CategoryForm = () => {

  const history = useHistory()

  const [category, setCategory] = useState({
    label: "",
    categoryId: 1
  })

  const changeCategoryState = (event) => {
    const newCategory = { ...category }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newCategory[event.target.id] = selectedVal
    setCategory(newCategory)
    console.log("you hit your change state")
  }

  const handleClickSaveCategory = (event) => {
    event.preventDefault()

    if (category.label === "") {
            window.alert("Please enter a category")
    } else {
        createCategory(category)
            .then(() => {history.push("/categories")})
    }
  }

  return (
    <form className="categoryForm">
      <h2 className="categoryForm__title">Create New Category</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="label">Category Label: </label>
          <input type="text" id="label" required autoFocus
            className="form-control"
            placeholder="Enter New Label" 
            defaultValue={category.label}
            onChange={changeCategoryState}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary"
          onClick={handleClickSaveCategory}>
          Save Category
      </button>
    </form>
  )
}