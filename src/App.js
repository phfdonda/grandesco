import "./App.scss"
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import DashboardDev from "./components/DashboardDev"
import DashboardSuper from "./components/DashboardSuper"
import DashboardCo from "./components/DashboardCo"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/companies">
          <DashboardCo />
        </Route>
        <Route path="/developers">
          <DashboardDev />
        </Route>
        <Route path="/supervisors">
          <DashboardSuper />
        </Route>
      </Switch>
    </div>
  )
}
export default App
