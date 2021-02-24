import { BrowserRouter as Router,
      Switch,
      Route, } from "react-router-dom"

export default function App(){
  return(
    <Router>
      <Switch>
        <Route path="/signin">
          <p>Made it to signin</p>
        </Route>

        <Route path="/signup">
          <p>made it to sign up</p>
        </Route>

        <Route path="/browse">
          <p>made it to browse</p>
        </Route>

        <Route  exact path="/">
          <p>made it to home</p>
        </Route>
      </Switch>
    </Router>
  )
}