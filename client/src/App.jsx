import React from "react";
import { Grommet } from "grommet";
import { theme } from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// PAGES
// use react lazy + suspense
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import NotFound404 from "./pages/NotFound404";
import Profile from "./pages/Profile";
import AddNewFunds from "./pages/AddNewFunds";
import FundType from "./pages/FundType";
import IdentifyingFunds from "./pages/IdentifyingFunds";
import FundTypeSubPage from "./pages/FundTypeSubPage";
import IdentifyingInvestments from "./pages/IdentifyInvestments";
import MyActions from "./pages/MyActions";

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          {/* PROTECTED ROUTES */}
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/add-new-funds">
            <AddNewFunds />
          </Route>
          <Route exact path="/add-new-funds/:type">
            <FundType />
          </Route>
          <Route exact path="/add-new-funds/:type/:slug">
            <FundTypeSubPage />
          </Route>
          <Route path="/identify-funds">
            <IdentifyingFunds />
          </Route>
          <Route path="/identify-investments">
            <IdentifyingInvestments />
          </Route>
          <Route path="/my-actions">
            <MyActions />
          </Route>
          <Route exact path="/select"></Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
