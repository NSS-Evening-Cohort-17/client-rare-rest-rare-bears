import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CommentForm } from "./comment/CommentForm"
import { CategoryList } from "./category/CategoryList"
import { PostList } from "./post/PostList"
import { PostForm } from "./post/PostForm"
import { PostDetail } from "./post/PostDetail"
import { MyPosts } from "./post/MyPosts.js"
import { CategoryForm } from "./category/CategoryForm"
import { TagList } from "./tag/Tag.js"
import { CommentList } from "./comment/CommentList"
import { TagForm } from "./tag/TagForm.js"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  const setUserId = (userId) => {
    localStorage.setItem('userId', userId)
  }

  return <>
    {
      token
        ?
        <Route>
          <NavBar token={token} setToken={setToken} />
          <ApplicationViews />
        </Route>
        :
        <Redirect to="/login" />
    }

    <Route exact path="/login" >
      <NavBar token={token} setToken={setToken} />
      <Login token={token} setToken={setToken} setUserId={setUserId} />
    </Route>

    <Route path="/register" exact>
      <NavBar token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </Route>

    <Route exact path="/posts/:postId/comments/new" >
      <CommentForm token={token} setToken={setToken} />
    </Route>

    <Route exact path="/posts/:postId/comments" >
      <CommentList token={token} setToken={setToken} />
    </Route>

    <Route exact path="/categories" >
      <CategoryList token={token} setToken={setToken} />
    </Route>

    <Route exact path="/posts">
        <PostList />
    </Route>

    <Route exact path="/posts/new">
        <PostForm />
    </Route>
    
    <Route exact path="/posts/:postId">
        <PostDetail />
    </Route>

    <Route path="/my-posts">
        <MyPosts />
    </Route>

    <Route exact path="/posts/:postId/edit" >
      <PostForm token={token} setToken={setToken} />
    </Route>
    
    <Route exact path="/categories/new" >
      <CategoryForm token={token} setToken={setToken} />
    </Route>
    
    <Route exact path="/categories/:categoryId/edit" >
      <CategoryForm token={token} setToken={setToken} />
    </Route>  
    
    <Route exact path="/tags" >
      <TagList token={token} setToken={setToken} />
    </Route>

    <Route exact path="/tags/new" >
      <TagForm token={token} setToken={setToken} />
    </Route>

    <Route exact path="/tags/:tagId/edit" >
      <TagForm token={token} setToken={setToken} />
    </Route>

  </>
}
