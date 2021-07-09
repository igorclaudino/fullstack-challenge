import {
  Switch,
  Route,
  Router,
} from "react-router-dom";
import history from "./history";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/'>
        <Home/>
      </Route>
      <Route path='/detail/:id' exact>
        <BookDetail/>
      </Route>
    </Switch>
  </Router>
)

export default Routes;