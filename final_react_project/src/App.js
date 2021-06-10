import './App.css';
import FridgeContainer from './components/FridgeContainer';
import RecipiesContainer from './components/RecipiesContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {Typography, } from "@material-ui/core"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/fridge">
            <FridgeContainer/>
          </Route>

          <Route path ="/recipies">
            <RecipiesContainer/>
          </Route>
        </Switch>
        <div>
          <Link to="/fridge"> Fridge </Link>
          <Link to= "/recipies">Recipies</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
