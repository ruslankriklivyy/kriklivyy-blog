import React from "react"
import { Link } from "gatsby"

const PostItem = ({ title, date, descr, url }) => {
  return (
    <div className="posts-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="post img" />
      <Link to={`/posts${url}`}>{title}</Link>
      <span>{date}</span>
      <p>{descr}</p>
    </div>
  )
}

export default PostItem
