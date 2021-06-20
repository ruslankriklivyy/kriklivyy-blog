import React from "react"
import { Link } from "gatsby"

const PostItem = ({ title, date, descr, url }) => {
  return (
    <div className="posts-item">
      <Link to={`/posts${url}`}>{title}</Link>
      <span>{date}</span>
      <p>{descr}</p>
    </div>
  )
}

export default PostItem
