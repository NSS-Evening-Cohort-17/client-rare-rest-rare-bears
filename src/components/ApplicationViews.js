import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
  return <>
      <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <CategoryList />
            </Route>
        </main>
  </>
}
