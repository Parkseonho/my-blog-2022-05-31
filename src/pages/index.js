import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
      <title> home page?? </title>
      <h1> home page!! </h1>
      <Link to="/layout">Layout_ _ _</Link>
      <Link to="/about">About_ _ _</Link>
      <Link to="/test">Test_ _ _</Link>
      <Link to="/test-space">Test-space</Link>
    </main>
  );
};

export default IndexPage;
