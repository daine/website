import React from "react"

import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import { Link } from "react-router"

const Home =  ({ articles }) => (
  <div>
    <h1>Home</h1>
    <ul>
      {
        articles && articles.node && articles.node.list &&
        articles.node.list.map((article) => (
          <li key={article.id}>
            <Link to={ `/articles/${ article.id }`}>{ article.title || article.id }</Link>
          </li>
        ))
      }
    </ul>
  </div>
)


const HomeContainer = createContainer(Home, (props) => ({
  articles: query({ collection: "articles", sortBy: "date" }),
}))


export default HomeContainer
