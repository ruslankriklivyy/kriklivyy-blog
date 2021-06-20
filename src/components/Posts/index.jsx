import React from "react"
import { Link } from "gatsby"

import "./posts.scss"

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts-item">
        <Link to={"/post"}>JS в деталях [Part 1]</Link>
        <span>20 June 2021</span>
        <p>Рассмотрим типы переменных в JS</p>
      </div>
    </div>
  )
}

export default Posts
