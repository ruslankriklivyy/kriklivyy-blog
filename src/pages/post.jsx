import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="JS в деталях [Part 1] | Kriklivyy.js" />
    <div className="post">
      <h2 className="post-name">JS в деталях [Part 1]</h2>
      <span className="post-date">20 June 2021</span>
      <div className="navigation">
        <h3>Navigation</h3>
        <nav>
          <ul>
            <li>
              <a href="/">Начало</a>
            </li>
            <li>
              <a href="/">Переменные в JS</a>
              <ul>
                <li>
                  <a href="/">Типы переменных в JS</a>
                </li>
                <li>
                  <a href="/">Подробнее о var</a>
                </li>
                <li>
                  <a href="/">Различия между const, let и var</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Выводы</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="post-content"></div>
    </div>
    <Link to="/" className="back">
      Go back
    </Link>
  </Layout>
)

export default SecondPage
