import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route
          render={() => (
            <>
              <br />
              <br />
              <h1 className="text-danger text-center m-5 p-5">
                404 - NOT FOUND
              </h1>
              <br />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
