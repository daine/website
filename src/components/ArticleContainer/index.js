import React from "react"

import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"

const Article = ({ page }) => (
  <div>
    {page.node && (
      <article>
        <h1>{ page.node.title }</h1>
        <BodyRenderer>{ page.node.body }</BodyRenderer>
      </article>
    )}
  </div>
)

const ArticleContainer = createContainer(Article, (props) => ({
  page: query({ collection: "articles", id: props.params.splat }),
}))

export default ArticleContainer
