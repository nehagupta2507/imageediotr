import React, { useState } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LandingPage() {
  const [src, setsrc] = useState([]);
  const handleClick = (obj) => {
    Object.keys(obj).map((key) => {
      setsrc((prevvalue) => {
        return [...prevvalue, URL.createObjectURL(obj[key])];
      });
      return "";
    });
  };

  return (
      <div id="mainPage">
        <div id="form">
          Image Editor
        </div>
        <div id="imgBtn">
          <Link to={{ pathname: "/Edit", state: { Sources: src } }}>
            <Button variant="outline-light" size="lg">
              Upload Image
            </Button>
          </Link>
        </div>
        <br></br>
        <div>
          <Button variant="outline-light" size="lg">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={(e) => handleClick(e.target.files)}
              required
            ></input>
          </Button>
        </div>
      </div>
  );
}
