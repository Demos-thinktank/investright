import React, { useContext } from "react";
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
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import NotFound404 from "./pages/NotFound404";
import Profile from "./pages/Profile";
//
import { AuthContext } from "./store/AuthProvider";

let choices = [
  ["grapefruit", "Grapefruit"],
  ["lime", "Lime"],
  ["coconut", "Coconut"],
  ["mango", "Mango"],
];

function App() {  
  const { auth } = useContext(AuthContext);
  console.log("app authcontext", auth.isAuthenticated);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        {/* PROTECTED ROUTES */}
        <Route exact path="/profile">
          {auth.isAuthenticated ? <Profile /> : <Redirect to="/" />}
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
  );
}

export default App;
