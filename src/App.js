import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
