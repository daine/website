import React from "react"
import { Router, Route, browserHistory } from "react-router"
import { createApp } from "@phenomic/preset-react-app/lib/client"

import HomeContainer from "./src/components/HomeContainer"
import ArticleContainer from "./src/components/ArticleContainer"

// const routes = () => (
//   <Router history={ browserHistory }>
//     <Route path="/" component={ HomeContainer } />
//     <Route path="/articles/*" component={ ArticleContainer } collection="articles" />
//   </Router>
// )
//
// export default createApp(routes)

export default createApp(() => (
  <Router history={ browserHistory }>
    <Route path="/" component={ HomeContainer  } />
    <Route path="/articles/*" component={ ArticleContainer } collection="articles" />
  </Router>
))
