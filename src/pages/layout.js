import React from "react";
import { Link } from "gatsby";

const layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
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
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        <h2>{children}</h2>
      </main>
    </div>
  );
};

export default layout;
