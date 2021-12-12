import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import EditPhoto from "./components/EditPhoto/EditPhoto";
import ThankYou from "./components/ThankYouPage/ThankYouPage.jsx";
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/Edit" component={EditPhoto}></Route>
      <Route exact path="/Downloaded" component={ThankYou}></Route>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
