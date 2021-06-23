import React from "react"
import "./topBtn.scss"

const TopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button className="btn-top" onClick={scrollToTop}>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
        l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
        l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
        c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
            />
          </g>
        </g>
      </svg>
    </button>
  )
}

export default TopBtn
