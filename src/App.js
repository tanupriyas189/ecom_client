import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <div className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
