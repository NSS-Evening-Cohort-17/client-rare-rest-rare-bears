import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCategories, deleteCategory } from "./CategoryManager";

export const CategoryList = (props) => {
  const history = useHistory()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(data => setCategories(data))
  }, [])

  const handleDeleteCategory = id => {
    deleteCategory(id)
      .then(() => getCategories().then
            (setCategories))
  }

  return (
    <article className="categories">
      {
        categories.map(category => {
          return <section key={`category--${category.id}`} className="category">
            <div className="category__label">{category.label}</div>
            <button className="btn btn-2 btn-sep icon-edit"
              onClick={() => {
                history.push(`/categories/${category.id}/edit`)
              }}  
            >Edit</button>
            <button className="btn btn-2 btn-sep icon-delete"
              onClick={() => handleDeleteCategory(category.id)}>
              Delete</button>
          </section>
        })
      }
      <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
          history.push ({ pathname: `/categories/new` })
        }}
      >Create New Category</button>
    </article>
  )
}