import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
