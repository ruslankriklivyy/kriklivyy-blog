import React from "react"
import { Link } from "gatsby"

const PostItem = ({ title, date, descr, url, poster }) => {
  return (
    <Link className="posts-item" to={`/posts${url}`}>
      <div className="posts-item__img">
        <img src={poster} alt="post img" />
      </div>
      <div className="posts-item__info">
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{descr}</p>
      </div>
    </Link>
  )
}

export default PostItem
