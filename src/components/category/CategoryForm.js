import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCategory, getCategories, getCategoryById, updateCategory } from "./CategoryManager";

export const CategoryForm = () => {

  const history = useHistory()
  const { categoryId } = useParams()

  const [category, setCategory] = useState({
    label: ""
  })

  useEffect(() => {
    // getCategoryById(categoryId)
    //   .then(category => {
    //     setCategory(category)
    //     setIsLoading(false)
    //   })
    console.log("this is the category id", categoryId)
    if (categoryId) {
      getCategoryById(parseInt(categoryId))
        .then(updatedCategory => {
          setCategory({
            label: updatedCategory.label
          })
          console.log(updatedCategory)
        })
    }
  }, [])

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
    } else if (categoryId) {
      updateCategory(categoryId, category)
        .then(() => history.push("/categories"))
    } else {
      createCategory(category)
        .then(() => { history.push("/categories") })
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