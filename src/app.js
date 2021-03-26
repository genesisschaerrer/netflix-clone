import React from "react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"

import * as ROUTES from "./constants/routes"
import Home from "./pages/home"

export default function App(){
  return(
    <Router>
      <Switch>
        <Route  exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <p>Made it to signin</p>
        </Route>

        <Route path={ROUTES.SIGN_UP}>
          <p>made it to sign up</p>
        </Route>

        <Route path={ROUTES.BROWSE}>
          <p>Made it to browse</p>
        </Route>
      </Switch>
    </Router>
  )
}