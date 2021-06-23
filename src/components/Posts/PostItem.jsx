import React from "react"
import { Link } from "gatsby"

const PostItem = ({ title, date, descr, url, poster }) => {
  return (
    <div className="posts-item">
      <img src={poster} alt="post img" />
      <Link to={`/posts${url}`}>{title}</Link>
      <span>{date}</span>
      <p>{descr}</p>
    </div>
  )
}

export default PostItem
