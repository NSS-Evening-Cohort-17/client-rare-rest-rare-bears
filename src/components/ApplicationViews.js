import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./post/PostList"
import { PostForm } from "./post/PostForm"
import { PostDetail } from "./post/PostDetail"

export const ApplicationViews = () => {
  return <>
      <main>
          {/* <h1>Welcome to Rare Publishing!</h1> */}
          <Route exact path="/">
              <PostList />
          </Route>
      </main>
  </>
  }