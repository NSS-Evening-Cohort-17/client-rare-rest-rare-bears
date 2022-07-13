import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./post/PostList"
import { PostForm } from "./post/PostForm"

export const ApplicationViews = () => {
  return <>
      <main>
          <h1>Welcome to Rare Publishing!</h1>
          <Route exact path="/">
              <PostList />
          </Route>
          <Route exact path="/posts">
              <PostList />
          </Route>
          <Route exact path="/posts/new">
              <PostForm />
          </Route>
      </main>
  </>
  }