import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import lightSvg from "../../images/light.svg"
import moonSvg from "../../images/moon.svg"
import logoPng from "../../images/logo.png"
import "./header.scss"

const Header = () => {
  const [activeMode, setActiveMode] = React.useState(false)

  const toggleMode = React.useCallback(
    dark => {
      localStorage.setItem("darkMode", JSON.stringify(dark))
      setActiveMode(dark)

      !activeMode
        ? document.querySelector("body").classList.add("dark")
        : document.querySelector("body").classList.remove("dark")
    },
    [activeMode]
  )

  React.useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      const isDarkMode = localStorage.getItem("darkMode")

      setActiveMode(JSON.parse(isDarkMode))
      activeMode
        ? document.querySelector("body").classList.add("dark")
        : document.querySelector("body").classList.remove("dark")
    }
  }, [toggleMode])

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__info">
          <img className="logo" src={logoPng} alt="logo png" />
          <Link to="/">
            <h2>Kriklivyy</h2>
            <span>
              <b>{"<?php echo "}</b>«Блог о веб-разработке»<b>{" ?>"}</b>
            </span>
          </Link>
        </div>
        <div className="toggle-mode">
          {!activeMode ? (
            <button onClick={() => toggleMode(true)}>
              <img src={lightSvg} alt="lightSvg" />
            </button>
          ) : (
            <button onClick={() => toggleMode(false)}>
              <img src={moonSvg} alt="moonSvg" />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
