import React from 'react';
import { Button } from "react-bootstrap";

function Slider({ min, max, value, handleChange}) {
  return (
    <Button variant="outline-light" size="lg">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </Button>
  )
}

export default Slider;
