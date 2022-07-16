import React from "react"
import { Route } from "react-router-dom"
import { TagList } from "./tag/Tag"

export const ApplicationViews = () => {
  return (<>
    <h1 >Welcome to Rare Publishing</h1>
    <main style ={{
      margin: "5rem 2rem",
      lineHeight: "1.75rem"
    }}>
      <Route exact path="/tags">
        <TagList />
      </Route>
    </main>
    </>
  )
}
