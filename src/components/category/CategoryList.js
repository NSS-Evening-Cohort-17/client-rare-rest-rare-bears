import React, { useEffect, useState } from "react";
import { getCategories } from "./CategoryManager";

export const CategoryList = (props) => {
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
    </article>
  )

}