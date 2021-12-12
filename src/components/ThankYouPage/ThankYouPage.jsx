import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ThankYouPage.css";
import { Button } from "react-bootstrap";

function ThankYouPage() {
  return (
    <div id="greetings">
      <div>
        <h2> Thank you for checking out this App.</h2>
      </div>
      <div id="backBtn">
        <Link to="/">
          <Button variant="outline-light" size="lg">
            Try Again! &#129321;{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
