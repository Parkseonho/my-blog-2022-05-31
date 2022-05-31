import React from "react";
import { Link } from "gatsby";

function head() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test">TEST</Link>
        </li>
        <li>
          <Link to="/test-space">TEST-SPACE</Link>
        </li>
        <li>
          <Link to="/layout">LAYOUT</Link>
        </li>
      </ul>
    </div>
  );
}

export default head;
