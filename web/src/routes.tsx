import {
  Switch,
  Route,
  Router,
} from "react-router-dom";
import history from "./history";
import BookDetail from "./pages/BookDetail";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/new-book'>
        <NewBook/>
      </Route>
      <Route path='/detail/:id'>
        <BookDetail/>
      </Route>
    </Switch>
  </Router>
)

export default Routes;