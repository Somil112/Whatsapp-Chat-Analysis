import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import UploadChat from "./components/UploadChat"

import YearPage from "./components/YearPage"
import MonthPage from "./components/MonthPage"
import DayPage from "./components/DayPage"
import "./css/main.css"
import TopicPage from "./components/TopicPage"

function App() {
  return (
    <Router>
      <div className="container">
        <Fragment>
          <Route exact path="/" component={UploadChat} />
          <Switch>
            <Route exact path="/dashboard" component={YearPage} />
            <Route exact path="/months" component={MonthPage} />
            <Route exact path="/days" component={DayPage} />
            <Route exact path="/topics" component={TopicPage} />
          </Switch>
        </Fragment>
      </div>
    </Router>
  )
}

export default App
