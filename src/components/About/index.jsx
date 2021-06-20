import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./about.scss"

const About = () => {
  return (
    <div className="about">
      <StaticImage
        src="../../images/ava.jpg"
        width={55}
        quality={55}
        formats={["AUTO", "JPG"]}
        alt="im img"
      />
      <div className="about-info">
        <p>
          Блог о frontend разработке.
          <br />
          Делюсь своими мыслями.
        </p>
        <div className="about-info__links">
          <a href="https://github.com/ruslankriklivyy">GitHub</a>
          <a href="https://t.me/ruslankriklivy">Telegram</a>
        </div>
      </div>
    </div>
  )
}

export default About
