import * as React from "react"
import { Link } from "gatsby"

import lightSvg from "../../images/light.svg"
import moonSvg from "../../images/moon.svg"
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
          <Link to="/">
            <h2>Kriklivyy Blog 👋</h2>
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
