import React from "react"
import { BrowserRouter as Router,
      Switch,
      Route, } from "react-router-dom"

import Home from "../pages/home"

export default function App(){
  return(
    <Router>
      <Switch>
        <Route  exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <p>Made it to signin</p>
        </Route>

        <Route path="/signup">
          <p>made it to sign up</p>
        </Route>

        <Route path="/browse">
          <p>Made it to browse</p>
        </Route>
      </Switch>
    </Router>
  )
}