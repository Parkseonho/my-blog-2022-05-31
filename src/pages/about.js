import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

function aboutpage() {
  return (
    <main>
      <title>자기소개</title>
      <h1>자기소개 페이지 입니다.</h1>
      <Link to="/">Back to home</Link>
      <Layout pageTitle="About me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </main>
  );
}

export default aboutpage;
