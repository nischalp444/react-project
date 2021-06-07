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

function App() {
  return (
    <div className="App">
      <h1> Start of my final react project</h1>
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
