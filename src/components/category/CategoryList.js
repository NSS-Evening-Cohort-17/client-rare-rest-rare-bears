import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCategories } from "./CategoryManager";

export const CategoryList = (props) => {
  const history = useHistory()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(data => setCategories(data))
  }, [])

  return (
    <article className="categories">
      {
        categories.map(category => {
          return <section key={`category--${category.id}`} className="category">
            <div className="category__label">{category.label}</div>
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