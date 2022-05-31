import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title> home page?? </title>
      <h1> home page!! </h1>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>
      <Link to="/test-space">Test-space</Link>
    </main>
  );
};

export default IndexPage;
