import React, { useContext } from "react";
import { Grommet } from "grommet";
import { theme } from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// PAGES
// use react lazy + suspense
import Select from "./components/Select";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import NotFound404 from "./pages/NotFound404";
import Profile from "./pages/Profile";
import AddNewFunds from "./pages/AddNewFunds";
//
import { AuthContext } from "./store/AuthProvider";
import FundType from "./pages/FundType";

let choices = [
  ["grapefruit", "Grapefruit"],
  ["lime", "Lime"],
  ["coconut", "Coconut"],
  ["mango", "Mango"],
];

function App() {
  const { auth } = useContext(AuthContext);
  console.log("app authcontext", auth.isAuthenticated);

  function publicRoute(component, path) {
    if (!auth.loading && !auth.isAuthenticated) {
      return component;
    } else {
      return <Redirect to={path} />;
    }
  }

  function authRoute(component, path) {
    if (!auth.loading && auth.isAuthenticated) {
      return component;
    } else {
      return <Redirect to={path} />;
    }
  }

  return (
    <Grommet theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            {publicRoute(<SignUp />, "/profile")}
          </Route>
          {/* PROTECTED ROUTES */}
          <Route exact path="/profile">
            {authRoute(<Profile />, "/")}
          </Route>
          <Route exact path="/add-new-funds">
            {authRoute(<AddNewFunds />, "/")}
          </Route>
          <Route path="/add-new-funds/:type">
            {authRoute(<FundType />, "/")}
          </Route>
          <Route exact path="/select">
            <Select
              values={choices}
              selected="lime"
              callback={(val) => console.log(val)}
            />
          </Route>
          {/* <Route component={NotFound404} /> */}
          <Route>
            {/* <Nav /> */}
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
