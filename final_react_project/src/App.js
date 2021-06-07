import './App.css';
import FridgeContainer from './components/FridgeContainer';
import ProductsContainer from './components/ProductsContainer';
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
          <Route exact path="/">
            <FridgeContainer/>
          </Route>

          <Route path="/products">
            <ProductsContainer/>
          </Route>

          <Route path ="/recipies">
            <RecipiesContainer/>
          </Route>
        </Switch>
        <div>
          <Link to="/"> Fridge </Link>
          <Link to="/products"> Products</Link>
          <Link to= "/recipies">Recipies</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
