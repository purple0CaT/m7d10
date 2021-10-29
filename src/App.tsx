import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import { useEffect } from "react";
import { geolocated } from "react-geolocated";
import { useDispatch } from "react-redux";
import { setCoords } from "./redux/action/actions";
import Profile from "./components/profile/Profile";

function App(props: any) {
  const dispatch = useDispatch();

  const setCordinatesFetch = () => {};

  useEffect(() => {
    let longitude = props.coords ? props.coords.longitude : null; //
    let latitude = props.coords ? props.coords.latitude : null; //
    if (longitude & latitude) {
      dispatch(setCoords({ lon: longitude, lat: latitude }));
    }
    setCordinatesFetch();
  }, [props.coords]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route
          path="/profile"
          exact
          render={(routerProps) => <Profile {...routerProps} />}
        />
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

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 0,
})(App);
